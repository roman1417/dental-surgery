import styled from 'styled-components';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

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
`;

export const MenuElemnet = styled.li`
  a {
    display: block;    
    padding: ${({ theme: { spacing: { main } } }) =>
    `${main / 2}px 0 ${main / 2}px ${main}px`};  
    margin-bottom: 2px;
    font-size: 20px;
    color: black;
    text-decoration: none;
    &.active, &:hover {
      background-color: ${({ theme: { color: { primary } } }) =>
    lighten(0.25, primary)};
    };
  }; 
`;

MenuContainer.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};