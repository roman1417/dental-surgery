import styled from 'styled-components';

export const FeaturesWrapper = styled.section`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main}px;
`;

export const FeaturesTitle = styled.h3`  
  margin: ${({ theme: { spacing: { main } } }) => `${main * 2}px 0 ${main}px 0`};
  text-align: center;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Feature = styled.div`
  width: 90%;  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;

export const FeatureTitle = styled.p`
  font-weight: bold;
`;

export const FeatureIcon = styled.span`
  padding-right: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;