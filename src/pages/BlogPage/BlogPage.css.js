import styled from 'styled-components';

export const Article = styled.div`  
  margin: ${({ theme: { spacing } }) => `${spacing.main * 2}px 0`};
`;

export const ArticleTitle = styled.h3`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;

export const ArticleInitialText = styled.p`
  text-align: justify;
  hyphens: auto;
`;

export const ArtticleButtonWrapper = styled.div`  
  margin-top: ${({ theme: { spacing } }) => spacing.main}px;
  text-align: right;
`;