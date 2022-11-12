import { RefObject, useEffect } from 'react';

const useOnClickOutside = (ref: RefObject<any>, callback: Function) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOnClickOutside;
