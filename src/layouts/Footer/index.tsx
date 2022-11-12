import { FC } from 'react';

import './style.scss';

interface IFooter {
  children: JSX.Element;
}

const Footer: FC<IFooter> = ({ children }) => {
  return <footer className="Footer">{children}</footer>;
};

export default Footer;