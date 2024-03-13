import './input.scss';
interface Props {
  placeholder: string;
  type: string;
  className: string;
  id: string;
  name: string;
  required: string;
}

export const Input = ({ placeholder, type, className, id, name, required }: Props) => {
  const tag = document.createElement('input');
  tag.placeholder = placeholder;
  tag.id = id;
  tag.setAttribute('type', type);
  tag.setAttribute('required', required);
  tag.setAttribute('autocomplete', 'off');
  tag.setAttribute('name', name);
  tag.classList.add(...['input', className]);
  return tag;
};
