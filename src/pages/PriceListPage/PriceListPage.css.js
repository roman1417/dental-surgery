import styled from 'styled-components';

export const PriceListPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PriceListGroup = styled.div`
  flex-basis: 80%;  
  margin-bottom: ${({ theme: { spacing } }) => spacing.main * 2}px;
`;

export const GroupTitle = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
  font-size: 1.3rem;
  text-transform: uppercase;
`;

export const Service = styled.div`
  display: flex;
  margin-bottom: ${({ theme: { spacing } }) => spacing.main / 10}px;
`;

export const ServiceName = styled.div`
  flex-basis: 75%;
`;

export const ServicePrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-basis: 25%;
`;