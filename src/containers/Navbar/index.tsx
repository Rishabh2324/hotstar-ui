import { FC, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import useDeviceCheck from '../../hooks/useDeviceCheck';
import topNavlinks from '../../constants/topNavLinks';

import Button from '../../components/Button';

import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburgerIcon.svg';
import { ReactComponent as DisneyPlusHotstarLogo } from '../../assets/logos/logoDisneyPlusHotstar.svg';

import './style.scss';

interface INavbar {
  handleLeftSidebar?: Function;
  handleRightSidebar?: Function;
}
const Navbar: FC<INavbar> = ({ handleLeftSidebar, handleRightSidebar }) => {
  const { deviceType } = useDeviceCheck();

  const handleMenuIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    handleLeftSidebar && handleLeftSidebar(true);
  };

  const handleSearchIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    handleRightSidebar && handleRightSidebar(true);
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

      <Button
        className="Navbar__subscribe"
        onClick={() => null}
        buttonText={'SUBSCRIBE'}
      />

      <SearchIcon
        className="Navbar__searchIcon"
        onClick={handleSearchIconClick}
      />
    </div>
  );
};

export default Navbar;
