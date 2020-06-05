import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const burgerLine = css`
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
`;

export const Container = styled.button`
  display: block;
  align-self: center;  
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  ${media.md`
  display: none;
  `}
`;

export const Box = styled.span`
  position: relative;
  display: block;
  height: 24px;
  width: 40px;  
`;

export const Element = styled.span`
  
  ${burgerLine};
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .1s .2s ease-in-out;
  background-color: ${({ isMobileMenuOpen }) => isMobileMenuOpen && 'transparent'};
  
  &::before, &::after {
    content: '';
    ${burgerLine};
    transition: transform .2s .2s ease-in-out;
  }
  
  &::before {    
    top: -10px;    
    ${({ isMobileMenuOpen }) => isMobileMenuOpen && css`
    transform: translateY(10px) rotate(45deg);
    `};
  };
  
  &::after {    
    top: 10px;
    transition: transform .2s .2s ease-in-out;
    ${({ isMobileMenuOpen }) => isMobileMenuOpen && css`
    transform: translateY(-10px) rotate(-45deg);
    `};
  }
`;

Container.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Element.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
};