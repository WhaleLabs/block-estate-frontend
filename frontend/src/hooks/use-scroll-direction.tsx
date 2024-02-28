import React from 'react';

export function useScrollDirection(threshold = 0) {
  const [scrollDirection, setScrollDirection] = React.useState('up');

  const blocking = React.useRef(false);
  const prevScrollY = React.useRef(window.pageYOffset);

  React.useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= threshold) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        prevScrollY.current = scrollY;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []); // Dependency array is now empty

  return scrollDirection;
}
