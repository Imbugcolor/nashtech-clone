import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible ? (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '2rem',
          height: '2rem',
          backgroundColor: '#d6001c',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 98,
        }}
      >
        <IoIosArrowUp style={{ fontSize: '18px' }}/>
      </button>
    ) : null
  );
};

export default ScrollToTop;