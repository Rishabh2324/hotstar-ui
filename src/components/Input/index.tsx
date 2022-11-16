import { FC, useEffect, useState } from 'react';

import { ReactComponent as WarningIcon } from '../../assets/icons/warningIcon.svg';

import './style.scss';
interface IInput {
  value: string;
  error?: string;
  placeHolder: string;
  autoFocus?: boolean;
  onChange: Function;
  className?: string;
}

const Input: FC<IInput> = ({
  value,
  error,
  onChange,
  placeHolder,
  autoFocus = false,
  className = '',
}) => {
  const [data, setData] = useState('');

  const handleChange = (value: string) => {
    setData(value);
    onChange(value);
  };

  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <>
      <input
        value={data}
        className={`Input ${className}`}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        data-testid="InputComponent"
      />
      {error ? (
        <div>
          <p>{error}</p>
          <WarningIcon />
        </div>
      ) : null}
    </>
  );
};

export default Input;
