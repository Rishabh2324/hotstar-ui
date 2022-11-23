import React, { FC } from 'react';

import './style.scss';

interface IBanner {
  bannerSrc: string;
  bannerAlt: string;
  children: JSX.Element;
}

const BannerComponent: FC<IBanner> = ({ bannerSrc, bannerAlt, children }) => {
  return (
    <div className="BannerComponent">
      <img src={bannerSrc} alt={bannerAlt} />
      <div className="BannerComponent__gradient"></div>
      <div className="BannerComponent__children">{children}</div>
    </div>
  );
};

export default BannerComponent;
