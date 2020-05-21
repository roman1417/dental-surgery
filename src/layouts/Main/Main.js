import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainWrapper } from './Main.css';
import {
  HomePage,
  CrewPage,
  PriceListPage,
  GalleryPage,
  BlogPage,
  ContactPage,
  ErrorPage,
} from 'pages'

const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/crew' component={CrewPage} />
        <Route path='/pricelist' component={PriceListPage} />
        <Route path='/gallery' component={GalleryPage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </MainWrapper>
  );
}

export default React.memo(Main);