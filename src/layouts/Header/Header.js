import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import ScrollIntoView from 'react-scroll-into-view';

import { HeaderWrapper, HeaderImage, HeaderTitle } from './Header.css';
import Dots from './components/Dots';
import { Button } from 'components';
import slides from 'assets/slides';

const Header = () => {

  const changeSlideTime = 10000;

  const [activeSlide, setActiveSlide] = useState(0);

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;
    const time = changeSlideTime / 1000;

    gsap.set(image, { opacity: 0, autoAlpha: 0 });
    gsap.set(title, { opacity: 0, y: '50%', autoAlpha: 0 });
    gsap.set(button, { opacity: 0, y: '65%', autoAlpha: 0 });

    const tl = gsap.timeline()

    tl.addLabel('start', 0)
      .to(image, { duration: .03 * time, opacity: 1, autoAlpha: 1 })
      .to(image, { duration: .94 * time, opacity: 1 })
      .to(image, { duration: .03 * time, opacity: 0 })
      .to(title, { duration: .05 * time, opacity: 1, y: '-140%', autoAlpha: 1 }, 'start')
      .to(title, { duration: .92 * time, opacity: 1 }, '>')
      .to(title, { duration: .03 * time, opacity: 0 }, '>')
      .to(button, { duration: .03 * time, opacity: 0, autoAlpha: 1 }, 'start')
      .to(button, { duration: .05 * time, opacity: 1, y: '-140%', ease: 'Power3.easeOut' }, '>')
      .to(button, { duration: .89 * time, opacity: 1 }, '>')
      .to(button, { duration: .03 * time, opacity: 0 }, '>')
  })

  const changeSlide = useCallback(() => setActiveSlide(
    activeSlide => activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  ), []);

  const changeDot = useCallback(index => setActiveSlide(index), [])

  useEffect(() => {
    const interval = setInterval(changeSlide, changeSlideTime);
    return () => clearInterval(interval)
  }, [activeSlide, changeSlide]);

  return (
    <HeaderWrapper id='header'>
      <HeaderImage
        ref={imageRef}
        srcSet={slides[activeSlide].srcSet}
        sizes='(max-width: 640px) 600px, (max-width: 1280px) 1200px, 1800px '
        src={slides[activeSlide].src}
      />
      <Dots
        slides={slides}
        activeSlide={activeSlide}
        changeDot={changeDot}
      />
      <HeaderTitle ref={titleRef}>
        {slides[activeSlide].text}
      </HeaderTitle>
      <ScrollIntoView selector='#main'>
        <Button
          ref={buttonRef}
          variant='header'
          to={`/article/${activeSlide + 1}`}
        >
          Zobacz więcej
        </Button>
      </ScrollIntoView>
    </HeaderWrapper>
  );
}

export default React.memo(Header);