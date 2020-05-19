import React, { useState, useEffect, useCallback } from 'react';

import { HeaderWrapper, HeaderImage } from './Header.css';
import Dots from './components/Dots';
import slides from 'utils/slides';

const Header = () => {

  const changeSlideTime = 3000;

  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = useCallback(() => setActiveSlide(
    activeSlide => activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  ), []);

  const changeDot = useCallback(index => setActiveSlide(index), [])

  useEffect(() => {
    const interval = setInterval(changeSlide, changeSlideTime);
    return () => clearInterval(interval)
  }, [activeSlide, changeSlide]);

  return (
    <HeaderWrapper>
      <HeaderImage
        srcSet={slides[activeSlide].srcSet}
        sizes='(max-width: 640px) 600px, (max-width: 1280px) 1200px, 1800px '
        src={slides[activeSlide].src}
      />
      <Dots
        slides={slides}
        activeSlide={activeSlide}
        changeDot={changeDot}
      />
    </HeaderWrapper>
  );
}

export default React.memo(Header);