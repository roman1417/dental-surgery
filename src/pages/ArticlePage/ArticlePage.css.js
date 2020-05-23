import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;  
  margin: ${({ theme: { spacing } }) => `0 auto ${spacing.main * 2}px auto`};
  font-size: 1.2rem;
  color: #000;
`;
