import { Path } from 'react-router-dom';

export interface IIconWithTitleLink {
  icon: JSX.Element;
  title?: string;
  linkTo: string | Partial<Path>;
  showActive?: boolean;
}
