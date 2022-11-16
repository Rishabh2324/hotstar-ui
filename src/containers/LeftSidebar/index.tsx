import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import sidebarLinks from '../../constants/sidebarLinks';

import { ReactComponent as KidsSafeLogo } from '../../assets/logos/kidsSafe.svg';
import { ReactComponent as RightChevronLogo } from '../../assets/icons/rightChevronIcon.svg';

import './style.scss';

const LeftSidebar = () => (
  <div className="LeftSidebar">
    <Link
      className="LeftSidebar__item smallIcon separator"
      to={'/login'}
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <p className="text1">Log in</p>
        <p className="text2">For a better experience</p>
      </div>
      <RightChevronLogo />
    </Link>
    <Link className="LeftSidebar__item separator" to={'/my-watchlist'}>
      <p className="text1">Watchlist</p>
    </Link>
    <div className="LeftSidebar__item">
      <KidsSafeLogo />
      <span>Toogle</span>
    </div>
    {sidebarLinks.map((link, index) => (
      <NavLink
        key={index}
        to={link.linkTo}
        className={({ isActive }) =>
          `LeftSidebar__item iconWithText smallIcon ${isActive ? 'active' : ''}`
        }
      >
        {link.icon} <span>{link.title}</span>
      </NavLink>
    ))}
  </div>
);

export default LeftSidebar;
