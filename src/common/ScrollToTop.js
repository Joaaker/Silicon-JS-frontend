import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0 });

    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;