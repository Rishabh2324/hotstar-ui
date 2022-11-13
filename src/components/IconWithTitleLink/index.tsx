import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IIconWithTitleLink } from '../../models/iconWithTitleLink';

import './style.scss';

const IconWithTitleLink: FC<IIconWithTitleLink> = ({
  icon,
  title = '',
  linkTo,
  showActive = true,
}) => {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        `IconWithTitleLink ${isActive && showActive ? 'active' : ''}`
      }
    >
      {icon}
      {title && <div className="IconWithTitleLink__title">{title}</div>}
    </NavLink>
  );
};

export default IconWithTitleLink;
