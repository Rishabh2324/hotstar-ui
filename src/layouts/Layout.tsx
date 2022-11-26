import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import useDeviceCheck from '../hooks/useDeviceCheck';

import Footer from './Footer';
import Header from './Header';

import Navbar from '../containers/Navbar';
import BottomBar from '../containers/BottomBar';
import AboutFooter from '../containers/AboutFooter';
import LeftSidebar from '../containers/LeftSidebar';
import RightSidebar from '../containers/RightSideBar';

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
      <main>
        {/* <Outlet /> is used to renders the child route's element */}
        <Outlet />
      </main>

      <AboutFooter />

      <Footer children={<BottomBar />} />
    </>
  );
};

export default Layout;
