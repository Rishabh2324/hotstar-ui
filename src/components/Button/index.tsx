import { FC, MouseEventHandler } from 'react';

import './style.scss';

interface IButton {
  buttonText: string;
  variant?: 'brand-blue' | 'gray';
  className?: string;
  isHoverActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({
  buttonText,
  variant = 'brand-blue',
  className = '',
  isHoverActive = false,
  onClick,
}) => {
  return (
    <button
      className={`Button Button--${variant} ${
        isHoverActive ? 'showHover' : ''
      } ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
