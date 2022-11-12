import { Outlet } from 'react-router-dom';

import topNavlinks from '../constants/topNavLinks';
import bottomNavLinks from '../constants/bottomNavLinks';

import Footer from './Footer';
import Header from './Header';
import BottomBar from '../containers/BottomBar';
import Navbar from '../containers/Navbar';

const AppHeader = () => {
  return <Navbar links={topNavlinks} />;
};

const AppFooter = () => {
  return <BottomBar links={bottomNavLinks} />;
};

// Common Layout for all pages with Header and Footer
const Layout = () => {
  return (
    <>
      <Header children={<AppHeader />} />
      <main>
        {/* <Outlet /> is used to renders the child route's element */}
        <Outlet />
      </main>
      <Footer children={<AppFooter />} />
    </>
  );
};

export default Layout;
