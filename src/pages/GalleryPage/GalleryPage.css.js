import styled, { css } from 'styled-components';

const marginBottom = css`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main * 2}px;
`

export const GalleryWrapper = styled.div`
  ${marginBottom}
`;

export const GalleryTitle = styled.h3`
  ${marginBottom}
  font-size: 1.3rem;
  text-align: center;
`;

