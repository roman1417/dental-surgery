import styled from 'styled-components';

import { media } from 'utils/mixins';

export const MainWrapper = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme: { spacing: { main } } }) => `72px ${main}px 0 ${main}px`};
  ${({ theme: { spacing: { main } } }) => media.smLandscape`
  padding: 72px ${main * 2}px 0 ${main * 2}px; 
  `};
  ${({ theme: { spacing: { main } } }) => media.sm`
  padding: 72px ${main * 2}px 0 ${main * 2}px; 
  `};
`;