import styled from 'styled-components';

import { media } from 'utils/mixins';

export const FooterWrapper = styled.footer`  
  min-height: 20vh;  
  padding: ${({ theme: { spacing: { main } } }) => `${main * 2}px ${main}px`};
  margin-top: ${({ theme: { spacing } }) => spacing.main * 2}px;
  text-align: center;
  background-color: #333;
  color: #ccc;
  ${({ theme: { spacing } }) => media.smLandscape`
  padding: ${spacing.main * 2}px; 
  `};
  ${({ theme: { spacing } }) => media.sm`
  padding: ${spacing.main * 2}px;  
  `};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  ${media.sm`
  flex-direction: row;
  & > div {
    flex-basis: 50%
  }
  `}
`;

export const FooterAbout = styled.div`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main}px;  
`;

export const FooterTitle = styled.h3`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
  font-size: 1.3rem;
`;

export const FooterDescription = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;

export const HoursText = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 10}px;
`;