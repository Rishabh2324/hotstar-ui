import React, { FC } from 'react';
import { IInput } from '../../models/Input';
import Input from '../Input';

import './style.scss';

interface ISearchBar extends IInput {}

const SearchBar: FC<ISearchBar> = ({
  value,
  placeHolder,
  onChange,
  className = '',
}) => {
  return (
    <div className={`SearchBar ${className}`}>
      <Input
        value={value}
        placeHolder={placeHolder}
        onChange={onChange}
        type="search"
      />
    </div>
  );
};

export default SearchBar;
