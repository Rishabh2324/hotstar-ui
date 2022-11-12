import { FC, useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.scss';

interface ISidebar {
  toggle: boolean;
  handleToogle: Function;
}

const Sidebar: FC<ISidebar> = ({ toggle, handleToogle }) => {
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
      <div className={`Sidebar__details`} ref={ref}>
        Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
