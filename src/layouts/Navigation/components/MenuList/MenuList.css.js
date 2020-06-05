import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const menuSmall = css`
  width: 50%;
  height: 80vh;
  top: 20vh;
`;

export const MenuContainer = styled.ul`
  position: absolute;
  width: 80%;
  height: 85vh;
  right: 0;
  top: 15vh;   
  background-color: #fff;
  list-style: none;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, .25);
  transform: ${({ isMobileMenuOpen }) => !isMobileMenuOpen &&
    'translateX(105%)'};
  transition: .4s ease-in-out;
  ${media.smLandscape`
  ${menuSmall};
  `};
  ${media.sm`
  ${menuSmall};
  `};
  ${media.md`
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    transform: translateX(0);
    height: 100%;
    background-color: #eee;
    box-shadow: none;
  `}
`;

export const MenuElemnet = styled.li`
  a {
    display: block;    
    padding: ${({ theme: { spacing: { main } } }) => `
    ${main / 2}px 0 ${main / 2}px ${main}px
    `};  
    margin-bottom: 2px;
    font-size: 20px;
    color: black;
    text-decoration: none;
    &.active, &:hover {
      background-color: ${({ theme: { color } }) => lighten(.25, color.primary)};
    };
    ${({ theme: { spacing: { main } } }) => media.smLandscape`
    padding: ${main / 4}px 0 ${main / 4}px ${main}px;
  `};
    ${media.md`
    position: relative;
    padding: ${({ theme: { spacing: { main } } }) => `
    ${main / 4}px ${main / 2}px
    `};
    &.active, &:hover {
      background-color: transparent;
    }
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-color: ${({ theme: { color } }) => color.primary};
      transition: .4s;      
    };
    &:hover::after, &.active::after {
      transform: translateX(0%);      
      };
  `}
  }; 
`;

MenuContainer.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};