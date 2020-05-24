import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'

import { StyledLink } from './ArticlePage.css';
import { Article } from 'components';

const ArticlePage = ({ match }) => {
  const articleId = Number(match.params.id);
  return (
    <>
      <Article articleId={articleId} />
      <ScrollIntoView selector='#main'>
        <StyledLink to='/blog'>Powrót do listy artykułów</StyledLink>
      </ScrollIntoView>
    </>
  );
}

export default React.memo(ArticlePage);