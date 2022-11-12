import { FC } from 'react';

import useDeviceCheck from '../../hooks/useDeviceCheck';

import IconWithTitleLink, {
  IIconWithTitleLink,
} from '../../components/IconWithTitleLink';

import './style.scss';

interface IBottomBar {
  links: IIconWithTitleLink[];
}

const BottomNavigation: FC<IBottomBar> = ({ links }) => {
  const { deviceType } = useDeviceCheck();
  if (deviceType === 'desktop') return null;
  return (
    <div className="BottomNavigation">
      {links.map((link, index) => (
        <IconWithTitleLink
          key={index}
          linkTo={link.linkTo}
          title={link.title}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default BottomNavigation;
