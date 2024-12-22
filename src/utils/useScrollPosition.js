import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = () => setScrollPos(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollPos;
};

export default useScrollPosition;
