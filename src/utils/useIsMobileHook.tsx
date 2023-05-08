import { useState, useEffect } from 'react';

function useIsMobileHook() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setViewportWidth(width);
      }
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsMobile(viewportWidth < 1000);
  }, [viewportWidth]);

  return isMobile;
}

export default useIsMobileHook;
