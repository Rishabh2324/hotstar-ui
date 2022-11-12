import { MouseEvent, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useDeviceCheck from '../../hooks/useDeviceCheck';
import topNavlinks from '../../constants/topNavLinks';
import sidebarLinks from '../../constants/sidebarLinks';

import Sidebar from '../Sidebar';
import Button from '../../components/Button';

import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburgerIcon.svg';
import { ReactComponent as RightChevronLogo } from '../../assets/icons/rightChevronIcon.svg';
import { ReactComponent as DisneyPlusHotstarLogo } from '../../assets/logos/logoDisneyPlusHotstar.svg';
import { ReactComponent as KidsSafeLogo } from '../../assets/logos/kidsSafe.svg';

import './style.scss';

const Navbar = () => {
  const { deviceType } = useDeviceCheck();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleMenuIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    setShowNavMenu(true);
  };

  const handleSearchIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    setShowSearch(true);
  };

  const LeftSidebar = () => (
    <div className="Navbar__leftSidebar">
      <Link className="itemContainer smallIcon separator" to={'/login'}>
        <div>
          <p className="text1">Log in</p>
          <p className="text2">For a better experience</p>
        </div>
        <RightChevronLogo />
      </Link>
      <Link className="itemContainer separator" to={'/my-watchlist'}>
        <p className="text1">Watchlist</p>
      </Link>
      <div className="itemContainer">
        <KidsSafeLogo />
        <span>Toogle</span>
      </div>
      {sidebarLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.linkTo}
          className={({ isActive }) =>
            `itemContainer iconWithText smallIcon ${
              isActive ? 'activeLink' : ''
            }`
          }
        >
          {link.icon} <span className="text1">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );

  const RightSidebar = () => <></>;

  return (
    <div className="Navbar">
      <HamburgerIcon
        onClick={handleMenuIconClick}
        className="Navbar__menuIcon"
      />
      <DisneyPlusHotstarLogo className="Navbar__logo" />

      {deviceType === 'desktop' ? (
        <div role={'navigation'}>
          <ul className="Navbar__navigation">
            {topNavlinks.map((link, index) => (
              <li key={index}>
                <div>
                  <Link className="Navbar__navigation-navItem" to={link.linkTo}>
                    {link.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Button onClick={() => null} buttonText={'SUBSCRIBE'} />

      <SearchIcon
        className="Navbar__searchIcon"
        onClick={handleSearchIconClick}
      />

      {deviceType === 'mobile' ? (
        <Sidebar
          toggle={showNavMenu}
          handleToogle={setShowNavMenu}
          children={<LeftSidebar />}
        />
      ) : null}

      {deviceType === 'mobile' ? (
        <Sidebar
          toggle={showSearch}
          handleToogle={setShowSearch}
          toggleFrom={'right'}
          children={<RightSidebar />}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
