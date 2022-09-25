export interface IInput {
  value: string;
  type?: 'search' | 'text';
  placeHolder: string;
  onChange: Function;
  className?: string;
}
