import { FC } from 'react';

import './style.scss';

interface ISearchBar {
  value: string;
  variant?: 'primary' | 'secondary';
  placeHolder: string;
  onChange: Function;
  className?: string;
}

const SearchBar: FC<ISearchBar> = ({
  value,
  variant = 'primary',
  placeHolder,
  onChange,
  className = '',
}) => {
  return (
    <div className={`SearchBar ${variant} ${className}`}>
      <input
        type={'search'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchBar;
