import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { DotsWrapper, Dot } from './Dots.css';

const Dots = ({ slides, activeSlide, changeDot }) => {

  const dots = useMemo(
    () => (slides.map((slide, index) => (
      <Dot
        key={slide.text}
        number={index}
        activeSlide={activeSlide}
        onClick={changeDot.bind(null, index)}
      />
    ))),
    [activeSlide, slides, changeDot]
  );

  return (
    <DotsWrapper >
      {dots}
    </DotsWrapper>
  );
};

Dots.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  activeSlide: PropTypes.number.isRequired,
  changeDot: PropTypes.func.isRequired,
}

export default React.memo(Dots);