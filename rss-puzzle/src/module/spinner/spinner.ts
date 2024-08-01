import './spinner.scss';

export const Spinner = (): HTMLDivElement => {
  const spinnerWrapper: HTMLDivElement = document.createElement('div');
  spinnerWrapper.classList.add('spinner-wrapper');
  document.body.append(spinnerWrapper);

  const spinner: HTMLDivElement = document.createElement('div');
  spinner.classList.add('spinner');
  spinnerWrapper.append(spinner);
  return spinnerWrapper;
};
