import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import useDeviceCheck from '../../hooks/useDeviceCheck';
import topNavlinks from '../../constants/topNavLinks';

import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSideBar';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburgerIcon.svg';
import { ReactComponent as DisneyPlusHotstarLogo } from '../../assets/logos/logoDisneyPlusHotstar.svg';

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
          children={<LeftSidebar />} // left side bar is using out side click handler so need to of closeSidebar prop
        />
      ) : null}

      {deviceType === 'mobile' ? (
        <Sidebar
          toggle={showSearch}
          handleToogle={setShowSearch}
          toggleFrom={'right'}
          children={<RightSidebar closeSidebar={setShowSearch} />}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
