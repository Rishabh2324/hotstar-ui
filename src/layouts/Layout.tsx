import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import BottomBar from '../containers/BottomBar';
import Navbar from '../containers/Navbar';

// Common Layout for all pages with Header and Footer
const Layout = () => {
  return (
    <>
      <Header children={<Navbar />} />
      <main>
        {/* <Outlet /> is used to renders the child route's element */}
        <Outlet />
      </main>
      <Footer children={<BottomBar />} />
    </>
  );
};

export default Layout;
