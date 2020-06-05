import styled from 'styled-components';
import { darken } from 'polished';

import { media } from 'utils/mixins';

const RootButton = styled.button`
  padding: ${({ theme: { spacing: { main } } }) => `${main / 4}px ${main / 2}px`};  
  border: 1px solid #555;
  font-family: 'Open Sans', sans-serif;
  font-size: .9rem;
  background-color: ${({ theme: { color } }) => color.primary};
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: .3;
  &:hover {
    background-color: ${({ theme: { color } }) => darken(.1, color.primary)};
  }
`;

export const HeaderButton = styled(RootButton)`
  position: absolute;  
  left: 5%;
  top: 75%;
  border: none;  
  font-size: 1.4rem;
  ${({ theme: { spacing } }) => media.smLandscape`
  left: ${spacing.main * 2}px;
  `};
  ${({ theme: { spacing } }) => media.sm`
  left: ${spacing.main * 2}px;
  `};
`;

export const ArticleButton = styled(RootButton)`

`;

export const FormButton = styled(RootButton)`
  display: block;
  margin: ${({ theme: { spacing: { main } } }) => `
  ${main * 2}px 0 ${main / 2}px auto
  `};
  &[disabled] {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;