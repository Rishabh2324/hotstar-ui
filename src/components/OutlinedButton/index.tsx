import { FC, MouseEventHandler } from 'react';

import './style.scss';

interface IOutlinedButton {
  buttonText: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const OutlinedButton: FC<IOutlinedButton> = ({
  buttonText,
  className = '',
  onClick,
}) => {
  return (
    <button className={`OutlinedButton ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default OutlinedButton;
