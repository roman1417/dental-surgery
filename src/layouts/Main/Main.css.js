import styled from 'styled-components';

export const MainWrapper = styled.main`
  flex-grow: 1;
  padding: ${({ theme: { spacing: { main } } }) => `72px ${main}px 0 ${main}px`};
`;