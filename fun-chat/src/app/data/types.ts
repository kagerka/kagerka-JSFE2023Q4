export type BaseComponentType = {
  tag: keyof HTMLElementTagNameMap;
  styles: string[];
};

export type ButtonType = {
  name: string;
  styles: string[];
};

export type RouterType = {
  path: string;
  component: string;
};
