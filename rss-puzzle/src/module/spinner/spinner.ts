import './spinner.scss';

export const Spinner = () => {
  const spinnerWrapper = document.createElement('div');
  spinnerWrapper.classList.add('spinner-wrapper');
  document.body.append(spinnerWrapper);

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinnerWrapper.append(spinner);
  return spinnerWrapper;
};
