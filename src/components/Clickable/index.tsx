import React, { FC } from 'react';
import { Link, Path } from 'react-router-dom';

import './style.scss';

interface IClickable {
  size?: 'medium' | 'large';
  isHoverable?: boolean;
  label: string;
  linkTo: string | Partial<Path>;
}

const Clickable: FC<IClickable> = ({
  size = 'medium',
  isHoverable = true,
  label,
  linkTo,
}) => {
  return (
    <Link
      className={`Clickable ${size} ${isHoverable ? 'isHoverable' : 'default'}`}
      to={linkTo}
    >
      {label}
    </Link>
  );
};

export default Clickable;
