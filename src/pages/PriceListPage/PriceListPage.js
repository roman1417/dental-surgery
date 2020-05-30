import React, { useMemo } from 'react';

import prices from 'assets/priceList';
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
        {item.services.map(({ id, name, value }) => (
          <Service key={id}>
            <ServiceName>{name}</ServiceName>
            <ServicePrice>{`${value} zł`}</ServicePrice>
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