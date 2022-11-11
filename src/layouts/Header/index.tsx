import { FC } from 'react';

import './style.scss';

interface IHeader {
  children: JSX.Element;
}

export const Header: FC<IHeader> = ({ children }) => {
  return <header className="Header">{children}</header>;
};
