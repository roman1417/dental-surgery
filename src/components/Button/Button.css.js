import styled from 'styled-components';

const RootButton = styled.button`
  padding: ${({ theme: { spacing: { main } } }) => `${main / 4}px ${main / 2}px`};  
  border: 1px solid #555;
  font-family: 'Open Sans', sans-serif;
  font-size: .9rem;
  background-color: ${({ theme: { color } }) => color.primary};
  color: white;
  cursor: pointer;  
`;

export const HeaderButton = styled(RootButton)`
  position: absolute;  
  left: 5%;
  top: 75%;
  border: none;  
  font-size: 1.4rem;
`;

export const ArticleButton = styled(RootButton)`

`;

export const FormButton = styled(RootButton)`
  display: block;
  margin: ${({ theme: { spacing: { main } } }) => `
  ${main / 4}px 10% ${main / 2}px auto
  `}  
`;