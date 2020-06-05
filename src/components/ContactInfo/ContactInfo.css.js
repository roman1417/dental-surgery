import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;  
  color: ${({ variant }) => {
    switch (variant) {
      case 'navigation':
        return '#333'
      case 'footer':
        return '#ccc'
      default:
        return 'navigation'
    }
  }};
  justify-content: center;  
  padding: ${({ variant }) => variant === 'navigation' && `0 10px`}; 
  font-size: ${({ variant }) => variant === 'navigation' && .85}rem;
  ${media.md`
    flex-grow: 0;
    margin-right: ${({ variant, theme: { spacing } }) => variant === 'navigation' && spacing.main * 2}px;
  `};
`;

export const ContactText = styled.p`
  margin: 1px 0;
`;

export const ContactIcon = styled.span`
  padding-right: 10px;
`;

ContactInfoWrapper.propTypes = {
  variant: PropTypes.oneOf(['navigation', 'footer']).isRequired,
}