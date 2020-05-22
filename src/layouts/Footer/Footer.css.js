import styled from 'styled-components';

export const FooterAbout = styled.div`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main}px;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 20vh;  
  padding: ${({ theme: { spacing: { main } } }) => `${main * 2}px ${main}px`};
  background-color: #333;
  color: #ccc;
`;

export const FooterTitle = styled.h3`  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
  font-size: 1.3rem;
`;

export const FooterDescription = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;

export const HoursText = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 10}px;
`;