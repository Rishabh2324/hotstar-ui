import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IIconWithTitleLink } from '../../models/iconWithTitleLink';

import './style.scss';

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
