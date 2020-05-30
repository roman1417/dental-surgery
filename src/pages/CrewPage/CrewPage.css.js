import styled, { css } from 'styled-components';
import { darken } from 'polished';

const marginBottom = css`
margin-bottom: ${({ theme: { spacing } }) => spacing.main * 2}px;
`;

export const CrewPageWrapper = styled.div`
  text-align: center;
  overflow: hidden;
`;

export const CrewPageTitle = styled.h2` 
  ${marginBottom}
  text-transform: uppercase;
`;

export const CrewCard = styled.div`
  display: flex;
  flex-wrap: wrap;  
  ${marginBottom};  
`;

export const CardImageWrapper = styled.div`
  width: 100%; 
  margin: ${({ theme: { spacing } }) => `${spacing.main}px 0`};
`;

export const CardImage = styled.img`
  width: 100%;  
`;

export const CardDescription = styled.div`
  width: 100%;
`;

export const CardTitle = styled.h3`  
  margin: ${({ theme: { spacing } }) => `${spacing.main / 2}px 0`};  
  color: ${({ theme: { color } }) => darken(.1, color.primary)}
`;