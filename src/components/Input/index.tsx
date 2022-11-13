import { FC, useEffect, useState } from 'react';

import './style.scss';

interface IInput {
  value: string;
  placeHolder: string;
  onChange: Function;
  className?: string;
}

const Input: FC<IInput> = ({
  value,
  onChange,
  placeHolder,
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
    <input
      value={data}
      className={`Input ${className}`}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeHolder}
      data-testid="InputComponent"
    />
  );
};

export default Input;
