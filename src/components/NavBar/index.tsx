import React, { FC } from 'react';
import IconWithTitleLink, { IIconWithTitleLink } from '../IconWithTitleLink';

import './style.scss';

interface INavbar {
  navlinks: IIconWithTitleLink[];
}

const Navbar: FC<INavbar> = ({ navlinks }) => {
  return (
    <div className="Navbar">
      {navlinks.map((link) => (
        <IconWithTitleLink
          linkTo={link.linkTo}
          title={link.title}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default Navbar;
