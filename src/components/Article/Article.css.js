import styled from 'styled-components';

export const ArticleWrapper = styled.article`  
  margin: ${({ theme: { spacing } }) => `${spacing.main}px auto`};
  line-height: 1.6;
  text-align: justify;
  hyphens: auto;
`;

export const ArticleTitle = styled.h2`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main}px;
`;

export const AtricleImageWrapper = styled.div`
  width: 100%;  
  margin: ${({ theme: { spacing } }) => `${spacing.main / 2}px 0`};
`;

export const ArticleImage = styled.img`
  width: 100%;
`;