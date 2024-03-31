import { CHAR_INDEX, DISTANCE_AFTER_FLAG, MILLISEC_IN_SEC, NUMS_AFTER_DEC_POINT } from '../data/constants';
import { AnimationStateType, CoordinatesType, DriveResultType } from '../data/types';
import { driveMode, startEngine, stopEngine } from './car-drive';
import { getCars } from './get-cars';

const getPosition = (el: HTMLElement): CoordinatesType => {
  const { top, left, width, height } = el.getBoundingClientRect();
  const NUM_TWO = 2;
  const x = left + width / NUM_TWO;
  const y = top + height / NUM_TWO;
  const position = { x: x, y: y };
  return position;
};

export const getDistance = (firstElement: HTMLElement, secondElement: HTMLElement): number => {
  const firstPosition = getPosition(firstElement);
  const secondPosition = getPosition(secondElement);
  const distance = Math.hypot(firstPosition.x - secondPosition.x, firstPosition.y - secondPosition.y);
  return distance;
};

export const animation = (car: HTMLElement, distance: number, animationTime: number): AnimationStateType => {
  let animationStart: number;
  const state = { id: -1 };
  const id: number = Number(car.id.slice(CHAR_INDEX));
  const carAnimationState = { carId: id, animationId: state.id };
  const step = (timestamp: number): void => {
    if (!animationStart) {
      animationStart = timestamp;
    }
    if (animationStart) {
      const time = timestamp - animationStart;
      const passed = Math.round(time * (distance / animationTime));
      const PADDING_RIGHT = 40;
      car.style.transform = `translateX(${Math.min(passed, distance - PADDING_RIGHT)}px)`;
      if (passed < distance) {
        state.id = window.requestAnimationFrame(step);
        carAnimationState.animationId = state.id;
        localStorage.setItem(`carAnimationState-${id}`, JSON.stringify(carAnimationState));
      }
    }
  };
  state.id = window.requestAnimationFrame(step);

  return state;
};

export const stopAnimation = (car: HTMLElement): void => {
  const id = car.id.slice(CHAR_INDEX);
  const animationState = JSON.parse(localStorage.getItem(`carAnimationState-${id}`) || '{}');
  window.cancelAnimationFrame(animationState.animationId);
  car.style.transform = 'translateX(0)';
};

export const startDriving = async (
  id: number,
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
  car: HTMLElement,
  flag: HTMLElement,
): Promise<DriveResultType> => {
  if (startButton && stopButton) {
    startButton.classList.toggle('disabled', true);
    stopButton.classList.toggle('disabled', false);
  }
  const responseStart = await startEngine(id);
  const time = Math.round(responseStart.distance / responseStart.velocity);
  let finalDistance: number;
  let carAnimation: AnimationStateType = { id: -1 };
  if (car && flag) {
    finalDistance = Math.floor(getDistance(car, flag)) + DISTANCE_AFTER_FLAG;
    carAnimation = animation(car, finalDistance, time);
  }
  const responseDrive = await driveMode(id);
  if (!responseDrive.success && carAnimation) {
    window.cancelAnimationFrame(carAnimation.id);
  }
  localStorage.removeItem(`carAnimationState-${id}`);
  return { success: responseDrive.success, id: id, time: time };
};

export const stopDriving = async (
  id: number,
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
  car: HTMLElement,
): Promise<void> => {
  if (startButton && stopButton) {
    startButton.classList.toggle('disabled', false);
    stopButton.classList.toggle('disabled', true);
  }
  const animationState = JSON.parse(localStorage.getItem(`carAnimationState-${id}`) || '{}');
  stopAnimation(car);
  await stopEngine(id);
  if (car) {
    car.style.transform = 'translateX(0)';
  }
  window.cancelAnimationFrame(animationState.animationId);
};

export const raceAll = async (raceBtn: HTMLButtonElement, resetBtn: HTMLButtonElement): Promise<void> => {
  const localStorageData = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
  const pageNumber = localStorageData.pageNumber;
  const carsOnPage = await getCars(pageNumber);
  let isWinner = false;
  carsOnPage.cars.forEach(async (el): Promise<void> => {
    const id = el.id;
    const car: HTMLElement | null = document.getElementById(`car-img-${id}`);
    const flag: HTMLElement | null = document.getElementById(`img-flag-${id}`);
    const startButton = document.getElementById(`a-btn-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`b-btn-${id}`) as HTMLButtonElement;
    if (car && flag && startButton && stopButton) {
      const raceResult = await startDriving(id, startButton, stopButton, car, flag);
      if (raceResult.time && !isWinner) {
        const time = Number(raceResult.time / MILLISEC_IN_SEC).toFixed(NUMS_AFTER_DEC_POINT);
        const winner = { car: car.id, time: time };
        if (raceResult.success) {
          localStorage.setItem('raceWinnersData', JSON.stringify(winner));
          isWinner = true;
        }
      }
    }
  });
  if (raceBtn && resetBtn) {
    raceBtn.classList.toggle('disabled', true);
  }
};

export const resetAll = async (raceBtn?: HTMLButtonElement, resetBtn?: HTMLButtonElement): Promise<void> => {
  const localStorageData = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
  const pageNumber = localStorageData.pageNumber;
  const carsOnPage = await getCars(pageNumber);
  carsOnPage.cars.forEach(async (el) => {
    const id = el.id;
    const car: HTMLElement | null = document.getElementById(`car-img-${id}`);
    const startButton = document.getElementById(`a-btn-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`b-btn-${id}`) as HTMLButtonElement;
    if (car) {
      stopAnimation(car);
      await stopDriving(id, startButton, stopButton, car);
    }
  });
  if (raceBtn && resetBtn) {
    raceBtn.classList.toggle('disabled', false);
  }
  localStorage.removeItem('raceWinnersData');
};
