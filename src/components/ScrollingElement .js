import React, { useState, useEffect } from 'react';

const ScrollingElement = ({ scrollSpeed, direction }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine the translation value based on the direction prop
  const translateValue =
    direction === 'reverse' ? -scrollY * scrollSpeed : scrollY * scrollSpeed;

  return (
    <div
      className="scrolling-element"
      style={{ transform: `translateY(${translateValue}px)` }}
    >
      Your scrolling element content here
    </div>
  );
};

export default ScrollingElement;
