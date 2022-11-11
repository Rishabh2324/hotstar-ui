import { FC } from 'react';

import './style.scss';

interface IFooter {
  children: JSX.Element;
}

export const Footer: FC<IFooter> = ({ children }) => {
  return <footer className="Footer">{children}</footer>;
};
