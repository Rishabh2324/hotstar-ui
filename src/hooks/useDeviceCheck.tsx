import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'desktop';

const useDeviceCheck = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    setDeviceType(
      window.navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
    );
  }, []);

  return {
    deviceType,
  };
};

export default useDeviceCheck;
