import { FC, useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.scss';

interface ISidebar {
  toggle: boolean;
  handleToogle: Function;
  toggleFrom?: 'left' | 'right';
  children?: JSX.Element;
}

const Sidebar: FC<ISidebar> = ({
  toggle,
  handleToogle,
  toggleFrom = 'left',
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showSideBar, setShowSideBar] = useState(false);

  useOnClickOutside(ref, () => {
    handleToogle(false);
  });

  useEffect(() => {
    setShowSideBar(toggle);
  }, [toggle]);

  return (
    <div className={`Sidebar ${showSideBar ? 'expand' : ''}`}>
      <div
        ref={ref}
        className={`Sidebar__details ${
          toggleFrom === 'left' ? 'fromLeft' : 'fromRight'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
