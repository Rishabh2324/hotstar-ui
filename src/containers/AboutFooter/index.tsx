import React from 'react';
import { Link } from 'react-router-dom';

import links from '../../constants/aboutFooterLinks';

import { ReactComponent as FaceBookShareIcon } from '../../assets/icons/facebookShareIcon.svg';
import { ReactComponent as TwitterShareIcon } from '../../assets/icons/twitterIcon.svg';
import appleStore from '../../assets/logos/appleStore.png';
import googlePlayStore from '../../assets/logos/gplayStore.png';

import './style.scss';

const AboutFooter = () => {
  return (
    <div className="AboutFooter">
      <div className="AboutFooter__links">
        {links.map((link) => (
          <Link className="AboutFooter__links-link" to={link.linkTo}>
            {link.title}
          </Link>
        ))}
      </div>
      <p className="AboutFooter__desc">
        © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
        channel and programming logos are service marks of, and all related
        programming visuals and elements are the property of, Home Box Office,
        Inc. All rights reserved.
      </p>
      <div className="AboutFooter__actions">
        <div className="AboutFooter__actions-connectWithUs">
          <p className="heading">Connect with us</p>
          <div className="AboutFooter__actions-connectWithUs__icons">
            <FaceBookShareIcon className="icon" />
            <TwitterShareIcon className="icon" />
          </div>
        </div>
        <div className="AboutFooter__actions-download">
          <p className="heading">Disney+ Hotstar App</p>
          <div className="AboutFooter__actions-download__icons">
            <div className="storeDownloadIcon">
              <img src={googlePlayStore} alt="Google play store" />
            </div>
            <div className="storeDownloadIcon">
              <img src={appleStore} alt="Apple store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
