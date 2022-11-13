import { ReactComponent as HomeIcon } from '../assets/icons/homeIcon.svg';
import { ReactComponent as TvIcon } from '../assets/icons/tvIcon.svg';
import { ReactComponent as CompanyLogo } from '../assets/logos/logoDisneyPlusOnly.svg';
import { ReactComponent as CinemaIcon } from '../assets/icons/cinemaIcon.svg';
import { ReactComponent as SportsIcon } from '../assets/icons/sportIcon.svg';

const links = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    linkTo: '/',
  },
  {
    icon: <TvIcon />,
    title: 'TV',
    linkTo: '/tv',
  },
  {
    icon: <CompanyLogo />,
    linkTo: '/',
    showActive: false,
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

export default links;
