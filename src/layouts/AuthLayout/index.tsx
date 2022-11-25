import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';

import { ReactComponent as DisneyPlusHotstarLogo } from '../../assets/logos/logoDisneyPlusHotstar.svg';

import './style.scss';
import AboutFooter from '../../containers/AboutFooter';

const AppHeader = () => {
  return (
    <Link to={'/'}>
      <DisneyPlusHotstarLogo />
    </Link>
  );
};

const AuthLayout = () => {
  return (
    <>
      <div className="AuthLayout">
        <Header children={<AppHeader />} />
        <main>
          <Outlet />
        </main>
      </div>
      <AboutFooter />
    </>
  );
};

export default AuthLayout;
