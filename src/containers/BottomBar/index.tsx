import useDeviceCheck from '../../hooks/useDeviceCheck';
import bottomNavLinks from '../../constants/bottomNavLinks';

import IconWithTitleLink from '../../components/IconWithTitleLink';

import './style.scss';

const BottomNavigation = () => {
  const { deviceType } = useDeviceCheck();
  if (deviceType === 'desktop') return null;
  return (
    <div className="BottomNavigation">
      {bottomNavLinks.map((link, index) => (
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
