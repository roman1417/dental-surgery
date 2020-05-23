import React from 'react';

import { StyledLink } from './ArticlePage.css';
import { Article } from 'components';

const ArticlePage = ({ match }) => {
  const articleId = Number(match.params.id);
  return (
    <>
      <Article articleId={articleId} />
      <StyledLink to='/blog'>Powrót do listy artykułów</StyledLink>
    </>
  );
}

export default React.memo(ArticlePage);