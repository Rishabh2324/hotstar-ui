import useDeviceCheck from '../../hooks/useDeviceCheck';
import bottomNavLinks from '../../constants/bottomNavLinks';

import IconWithTitleLink from '../../components/IconWithTitleLink';

import './style.scss';

const BottomBar = () => {
  const { deviceType } = useDeviceCheck();
  if (deviceType === 'desktop') return null;
  return (
    <div className="BottomBar">
      {bottomNavLinks.map((link, index) => (
        <IconWithTitleLink
          key={index}
          linkTo={link.linkTo}
          title={link.title}
          icon={link.icon}
          showActive={link.showActive}
        />
      ))}
    </div>
  );
};

export default BottomBar;
