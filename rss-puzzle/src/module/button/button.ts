import './button.scss';
export interface BtnProps {
  buttonName: string;
  type: string;
  className: string;
  id: string;
}

export const Button = ({ buttonName, type, className, id }: BtnProps) => {
  const tag: HTMLButtonElement = document.createElement('button');
  tag.textContent = buttonName;
  tag.id = id;
  tag.setAttribute('type', type);
  tag.classList.add(...['btn', className]);
  return tag;
};
