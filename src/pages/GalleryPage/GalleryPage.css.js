import styled from 'styled-components';

import { media } from 'utils/mixins';

export const GalleryWrapper = styled.div`
  margin: ${({ theme: { spacing } }) => `0 auto ${spacing.main * 2}px auto`};
  ${media.sm`
    width: 70%;
  `};
`;

export const GalleryTitle = styled.h3`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main * 2}px;
  font-size: 1.3rem;
  text-align: center;
`;

