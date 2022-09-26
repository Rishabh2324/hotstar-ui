import { FC } from 'react';
import { Link, Path } from 'react-router-dom';
import './style.scss';

export interface IIconWithTitleLink {
  icon: JSX.Element;
  title?: string;
  linkTo: string | Partial<Path>;
}

const IconWithTitleLink: FC<IIconWithTitleLink> = ({
  icon,
  title = '',
  linkTo,
}) => {
  return (
    <Link to={linkTo} className="IconWithTitleLink">
      {icon}
      {title && <div className="IconWithTitleLink__title">{title}</div>}
    </Link>
  );
};

export default IconWithTitleLink;
