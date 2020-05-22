import styled from 'styled-components';
import PropTypes from 'prop-types';

export const DotsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);  
`;

export const Dot = styled.span`
  display: inline-block;
  box-sizing: content-box;  
  margin: 0 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  background-color: ${({ theme: { color }, number, activeSlide }) =>
    number === activeSlide ? color.secondary : '#ccc'};
`;

Dot.propTypes = {
  number: PropTypes.number.isRequired,
  activeSlide: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}