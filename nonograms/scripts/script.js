import {
  currentHint,
  currentTemplate,
  getRandomGame,
  loadGameOnChange,
  minutes,
  pauseAudio,
  playAudio,
  resetTimer,
  seconds,
  setAudio,
  startTimer,
  updateTimer,
} from './game-process.js';
import {
  audioBtn,
  gameField,
  highScoreTableBtn,
  modalText,
  modalWrapper,
  randomGameBtn,
  resetGameBtn,
  scoreWrapper,
  solutionBtn,
  themeBtn,
  updateGameField,
  updateScore,
} from './page.js';

const clickCells = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (!cell.className.includes('crossed') && !cell.className.includes('checked')) {
        cell.classList.add('checked');
        setAudio('checked');
        checkCells(cells);
      } else if (!cell.className.includes('crossed') && cell.className.includes('checked')) {
        cell.classList.remove('checked');
        setAudio('unchecked');
        checkCells(cells);
      }
    });
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!cell.className.includes('checked')) {
        cell.classList.toggle('crossed');
        setAudio('crossed');
      }
    });
  });
};
clickCells();

const page = document.getElementById('page');

const changeTheme = (theme) => {
  page.dataset.theme = theme;
};

themeBtn.addEventListener('click', () => {
  if (!themeBtn.classList.contains('dark')) {
    themeBtn.classList.add('dark');
    changeTheme('dark');
    themeBtn.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;
  } else {
    themeBtn.classList.remove('dark');
    changeTheme('light');
    themeBtn.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
  }
});

audioBtn.addEventListener('click', () => {
  if (!audioBtn.classList.contains('muted')) {
    pauseAudio();
    audioBtn.classList.add('muted');
    audioBtn.innerHTML = `<span class="material-symbols-outlined">volume_off</span>`;
  } else {
    playAudio();
    audioBtn.classList.remove('muted');
    audioBtn.innerHTML = `<span class="material-symbols-outlined">volume_up</span>`;
  }
});

randomGameBtn.addEventListener('click', () => {
  getRandomGame();
  updateGameField();
  clickCells();
  gameField.classList.remove('disabled');
});

resetGameBtn.addEventListener('click', () => {
  const crossed = document.querySelectorAll('.crossed');
  crossed.forEach((cell) => {
    cell.classList.remove('crossed');
  });

  const checked = document.querySelectorAll('.checked');
  checked.forEach((cell) => {
    cell.classList.remove('checked');
  });
  gameField.classList.remove('disabled');
  resetTimer();
  updateTimer();
  startTimer();
});

const checkCells = (cells) => {
  let errors = [];
  let cellNum = 0;
  for (let i = 0; i < currentTemplate.length; i++) {
    for (let j = 0; j < currentTemplate[i].length; j++) {
      if (
        (cells[cellNum].className.includes('checked') && currentTemplate[i][j] === 0) ||
        (!cells[cellNum].className.includes('checked') && currentTemplate[i][j] === 1)
      ) {
        errors.push(cells[cellNum].id);
      }
      cellNum++;
    }
  }
  if (errors.length === 0) {
    setTimeout(() => {
      const crossed = document.querySelectorAll('.crossed');
      crossed.forEach((cell) => {
        cell.classList.remove('crossed');
      });
      playAudio('winner');
      localStorageUpdate();
      modalText.innerHTML = `<div class='modal-heading'>Great!</div><div>You have solved the nonogram in <span class='modal-time'>${
        minutes * 60 + seconds
      }</span> seconds!</div>`;
      resetTimer();
      modalWrapper.classList.remove('hidden');
    }, 1000);
  }
};

solutionBtn.addEventListener('click', () => {
  let cellNum = 0;
  let cells = document.querySelectorAll('.cell');
  for (let i = 0; i < currentTemplate.length; i++) {
    for (let j = 0; j < currentTemplate[i].length; j++) {
      if (currentTemplate[i][j] === 1) {
        cells[cellNum].classList.add('checked');
      }
      if (currentTemplate[i][j] === 0) {
        cells[cellNum].classList.remove('checked');
      }
      cells[cellNum].classList.remove('crossed');
      cellNum++;
    }
  }
});

modalWrapper.addEventListener('click', (e) => {
  if (e.target.classList.value === 'modal-wrapper') {
    modalWrapper.classList.add('hidden');
    gameField.classList.add('disabled');
  }
});

highScoreTableBtn.addEventListener('click', (e) => {
  scoreWrapper.classList.remove('hidden');
  updateScore();
});
scoreWrapper.addEventListener('click', (e) => {
  if (e.target.classList.value === 'score-wrapper') {
    scoreWrapper.classList.add('hidden');
  }
});
window.addEventListener('change', () => {
  loadGameOnChange();
  updateGameField();
  clickCells();
  gameField.classList.remove('disabled');
});

const localStorageUpdate = () => {
  let level = '';

  if (currentTemplate.length === 5) level = 'easy';
  if (currentTemplate.length === 10) level = 'medium';
  if (currentTemplate.length === 15) level = 'hard';

  let data = [];

  const scoreData = {
    level: level,
    hint: currentHint,
    timer: minutes * 60 + seconds,
    update: new Date() / 1000,
  };

  if (localStorage.getItem('games')) {
    data = JSON.parse(localStorage.getItem('games'));
  }
  data.push(scoreData);

  localStorage.setItem('games', JSON.stringify(data));
};
