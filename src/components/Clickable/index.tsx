import React, { FC } from 'react';
import { Link, Path } from 'react-router-dom';

import './style.scss';

interface IClickable {
  size?: 'medium' | 'large';
  isHoverable?: boolean;
  isDisabled?: boolean;
  label: string;
  linkTo?: string | Partial<Path>;
}

const Clickable: FC<IClickable> = ({
  size = 'medium',
  isHoverable = true,
  isDisabled = false,
  label,
  linkTo,
}) => {
  return (
    <Link
      className={`Clickable ${size} ${
        isHoverable ? 'isHoverable' : 'default'
      } ${isDisabled ? 'disabled' : ''}`}
      to={linkTo ?? ''}
    >
      {label}
    </Link>
  );
};

export default Clickable;
