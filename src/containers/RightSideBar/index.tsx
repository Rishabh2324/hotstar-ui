import { FC, MouseEvent, useState } from 'react';

import SearchBar from '../../components/SearchBar';

import { ReactComponent as BackIcon } from '../../assets/icons/backIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';

import './style.scss';

interface IRightSidebar {
  closeSidebar: Function;
}

const RightSidebar: FC<IRightSidebar> = ({ closeSidebar }) => {
  const [query, setQuery] = useState('');

  const handleRemoveQuery = (event: MouseEvent) => {
    event.stopPropagation();
    setQuery('');
  };

  const handleBackClick = (event: MouseEvent) => {
    event.stopPropagation();
    closeSidebar();
  };

  return (
    <div className="RightSidebar">
      <div className="RightSidebar__search">
        <BackIcon
          className="RightSidebar__search___icons"
          onClick={handleBackClick}
        />
        <SearchBar
          value={query}
          onChange={setQuery}
          variant="secondary"
          placeHolder={'Start Searching...'}
          className="RightSidebar__search___input"
        />
        <CloseIcon
          className="RightSidebar__search___icons"
          onClick={handleRemoveQuery}
        />
      </div>
      <div className="RightSidebar__searchResults">
        <p className="noResults">
          Search for <br /> shows, movies, sports and TV channels
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
