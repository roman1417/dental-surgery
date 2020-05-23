import React, { useMemo } from 'react';

import prices from 'utils/priceList';
import { Separator } from 'components';
import {
  PriceListPageWrapper,
  PriceListGroup,
  GroupTitle,
  Service,
  ServiceName,
  ServicePrice,
} from './PriceListPage.css';

const PriceListPage = () => {

  const priceList = useMemo(() => (
    prices.map(item => (
      <PriceListGroup key={item.title}>
        <GroupTitle>{item.title}</GroupTitle>
        <Separator />
        {item.services.map(item => (
          <Service key={item.id}>
            <ServiceName>{item.name}</ServiceName>
            <ServicePrice>{`${item.value} zł`}</ServicePrice>
          </Service>
        ))}
      </PriceListGroup>
    ))
  ), [])

  return (
    <PriceListPageWrapper>
      {priceList}
    </PriceListPageWrapper>
  );
}

export default React.memo(PriceListPage);