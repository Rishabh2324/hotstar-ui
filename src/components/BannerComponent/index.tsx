import React, { FC } from 'react';
import { Path } from 'react-router-dom';

import './style.scss';

interface IBanner {
  bannerSrc: string;
  bannerAlt: string;
  linkTo: string | Partial<Path>;
  children?: JSX.Element;
  className?: string;
}

const BannerComponent: FC<IBanner> = ({
  bannerSrc,
  bannerAlt,
  children,
  className,
}) => {
  return (
    <div className={`BannerComponent ${className}`}>
      <img src={bannerSrc} alt={bannerAlt} />
      {children && <div className="BannerComponent__gradient"></div>}
      <div className="BannerComponent__children">{children}</div>
    </div>
  );
};

export default BannerComponent;
