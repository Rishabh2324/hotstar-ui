import { FC, useEffect, useRef, useState } from 'react';
import { IDeafaultSideBarProps } from '../../constants/sidebarInterface';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.scss';

interface ISidebar extends IDeafaultSideBarProps {
  toggleFrom?: 'left' | 'right';
  children?: JSX.Element;
}

const Sidebar: FC<ISidebar> = ({
  toggleFrom = 'left',
  children,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showSideBar, setShowSideBar] = useState(false);

  useOnClickOutside(ref, () => {
    toggleSidebar(false);
  });

  useEffect(() => {
    setShowSideBar(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div
      className={`Sidebar ${showSideBar ? 'expand' : ''} ${
        toggleFrom === 'left' ? 'toggleLeft' : 'toggleRight'
      }`}
    >
      <div
        ref={ref}
        className={`Sidebar__details-${
          toggleFrom === 'left' ? 'fromLeft' : 'fromRight'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
