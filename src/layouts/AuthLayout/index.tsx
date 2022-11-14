import { Link, Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import { ReactComponent as DisneyPlusHotstarLogo } from '../../assets/logos/logoDisneyPlusHotstar.svg';

import './style.scss';

const AppHeader = () => {
  return (
    <Link to={'/'}>
      <DisneyPlusHotstarLogo />
    </Link>
  );
};

const AuthLayout = () => {
  return (
    <div className="AuthLayout">
      <Header children={<AppHeader />} />
      <main>
        <Outlet />
      </main>
      <Footer children={<></>} />
    </div>
  );
};

export default AuthLayout;
