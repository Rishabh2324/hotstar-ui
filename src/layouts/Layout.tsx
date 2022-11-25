import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import BottomBar from '../containers/BottomBar';
import Navbar from '../containers/Navbar';
import AboutFooter from '../containers/AboutFooter';

// Common Layout for all pages with Header and Footer
const Layout = () => {
  return (
    <>
      <Header children={<Navbar />} />
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
