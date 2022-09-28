import React from 'react';
import './App.scss';
import Navbar from './components/NavBar';

import { ReactComponent as HomeIcon } from './assets/icons/homeIcon.svg';
import { ReactComponent as TvIcon } from './assets/icons/tvIcon.svg';
import { ReactComponent as CompanyLogo } from './assets/logos/logoDisneyPlusOnly.svg';
import { ReactComponent as CinemaIcon } from './assets/icons/cinemaIcon.svg';
import { ReactComponent as SportsIcon } from './assets/icons/sportIcon.svg';
import { BrowserRouter } from 'react-router-dom';

const navlinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    linkTo: '/home',
  },
  {
    icon: <TvIcon stroke="var(--TEXT_COLOR_L4)" />,
    title: 'TV',
    linkTo: '/tv',
  },
  {
    icon: <CompanyLogo />,
    linkTo: '/home',
  },
  {
    icon: <CinemaIcon />,
    title: 'Movies',
    linkTo: '/home',
  },
  {
    icon: <SportsIcon />,
    title: 'Sports',
    linkTo: '/sports',
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar navlinks={navlinks} />
    </BrowserRouter>
  );
}

export default App;