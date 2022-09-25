import { FC, useEffect, useState } from 'react';

import { IInput } from '../../models/Input';

import './style.scss';

const Input: FC<IInput> = ({
  value,
  onChange,
  type = 'text',
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
      type={type}
      value={data}
      className={`Input ${className}`}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeHolder}
      data-testid="InputComponent"
    />
  );
};

export default Input;
