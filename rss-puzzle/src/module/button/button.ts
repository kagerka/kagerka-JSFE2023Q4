import './button.scss';
interface Props {
  buttonName: string;
  type: string;
  className: string;
  id: string;
}

export const Button = ({ buttonName, type, className, id }: Props) => {
  const tag = document.createElement('button');
  tag.textContent = buttonName;
  tag.id = id;
  tag.setAttribute('type', type);
  tag.classList.add(...['btn', className]);
  return tag;
};
