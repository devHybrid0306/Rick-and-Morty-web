import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  opacity: 0.8;
  background-color: ${({ theme }) => theme.color.primary};
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: 2px solid white;

  &:hover {
    opacity: 1;
  }
`;

const TopArrow = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
`;

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button title="Back to top" onClick={scrollToTop}>
          <TopArrow>▲</TopArrow>
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
