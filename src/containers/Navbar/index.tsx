import { FC, MouseEvent, useState } from 'react';
import { Link, Path } from 'react-router-dom';

import useDeviceCheck from '../../hooks/useDeviceCheck';

import Button from '../../components/Button';

import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburgerIcon.svg';
import { ReactComponent as DisneyPlusHotstarLog } from '../../assets/logos/logoDisneyPlusHotstar.svg';

import './style.scss';
import Sidebar from '../Sidebar';

interface INavBar {
  links: {
    title?: string;
    linkTo: string | Partial<Path>;
  }[];
}

const Navbar: FC<INavBar> = ({ links }) => {
  const { deviceType } = useDeviceCheck();
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenuIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    setShowSideBar(true);
  };

  return (
    <div className="Navbar">
      <HamburgerIcon
        onClick={handleMenuIconClick}
        className="Navbar__menuIcon"
      />
      <DisneyPlusHotstarLog className="Navbar__logo" />

      {deviceType === 'desktop' ? (
        <div role={'navigation'}>
          <ul className="Navbar__navigation">
            {links.map((link, index) => (
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
      <SearchIcon className="Navbar__searchIcon" />

      {deviceType === 'mobile' ? (
        <Sidebar toggle={showSideBar} handleToogle={setShowSideBar} />
      ) : null}
    </div>
  );
};

export default Navbar;
