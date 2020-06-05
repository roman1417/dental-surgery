import styled from 'styled-components';

import { media } from 'utils/mixins';

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #eee;
  z-index: 1;  
`;

export const NavigationContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  ${({ theme: { spacing } }) => media.smLandscape`
  padding: 0 ${spacing.main * 2}px; 
  `};
  ${({ theme: { spacing } }) => media.sm`
  padding: 0 ${spacing.main * 2}px; 
  `};
`;