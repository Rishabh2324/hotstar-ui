import Navbar from '../components/NavBar';
import { Footer } from './Footer';
import { Header } from './Header';

import { ReactComponent as HomeIcon } from '../assets/icons/homeIcon.svg';
import { ReactComponent as TvIcon } from '../assets/icons/tvIcon.svg';
import { ReactComponent as CompanyLogo } from '../assets/logos/logoDisneyPlusOnly.svg';
import { ReactComponent as CinemaIcon } from '../assets/icons/cinemaIcon.svg';
import { ReactComponent as SportsIcon } from '../assets/icons/sportIcon.svg';
import { Outlet } from 'react-router-dom';

const navlinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    linkTo: '/',
  },
  {
    icon: <TvIcon stroke="var(--TEXT_COLOR_L4)" />,
    title: 'TV',
    linkTo: '/tv',
  },
  {
    icon: <CompanyLogo />,
    linkTo: '/',
  },
  {
    icon: <CinemaIcon />,
    title: 'Movies',
    linkTo: '/movies',
  },
  {
    icon: <SportsIcon />,
    title: 'Sports',
    linkTo: '/sports',
  },
];

const Layout = () => {
  return (
    <>
      <Header children={<h1>Header</h1>} />
      <main>
        <Outlet />
      </main>
      <Footer children={<Navbar navlinks={navlinks} />} />
    </>
  );
};

export default Layout;
