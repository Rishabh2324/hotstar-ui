import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import useDeviceCheck from '../../hooks/useDeviceCheck';

import Footer from '../Footer';
import Header from '../Header';

import Navbar from '../../containers/Navbar';
import BottomBar from '../../containers/BottomBar';
import AboutFooter from '../../containers/AboutFooter';
import LeftSidebar from '../../containers/LeftSidebar';
import RightSidebar from '../../containers/RightSideBar';

import './style.scss';

// Common Layout for all pages with Header and Footer
const Layout = () => {
  const { deviceType } = useDeviceCheck();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Application header with children navbar*/}
      <Header
        children={
          <Navbar
            handleLeftSidebar={setShowNavMenu}
            handleRightSidebar={setShowSearch}
          />
        }
      />

      {/* Application left Sidebar and right sidebar*/}
      <aside>
        {deviceType === 'mobile' ? (
          <LeftSidebar
            isSidebarOpen={showNavMenu}
            toggleSidebar={setShowNavMenu}
          />
        ) : null}
        {deviceType === 'mobile' ? (
          <RightSidebar
            isSidebarOpen={showSearch}
            toggleSidebar={setShowSearch}
          />
        ) : null}
      </aside>

      {/* All children are rendered here*/}
      <main className="Layout-main">
        {/* <Outlet /> is used to renders the child route's element */}
        <Outlet />
      </main>

      {/* Privacy policy footer */}
      <AboutFooter />

      <Footer children={<BottomBar />} />
    </>
  );
};

export default Layout;
