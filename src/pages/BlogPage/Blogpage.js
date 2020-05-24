import React, { useMemo } from 'react';
import ScrollIntoView from 'react-scroll-into-view'

import articles from 'utils/articles';
import { Separator, Button } from 'components';
import {
  Article,
  ArticleTitle,
  ArticleInitialText,
  ArtticleButtonWrapper,
} from './BlogPage.css';

const BlogPage = () => {

  const articleList = useMemo(() => (
    articles.map(article => (
      <Article key={article.id}>
        <Separator />
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleInitialText>{article.initialText}</ArticleInitialText>
        <ArtticleButtonWrapper>
          <ScrollIntoView selector='#main'>
            <Button variant='article' to={`/article/${article.id}`}>
              Czytaj więcej
          </Button>
          </ScrollIntoView>
        </ArtticleButtonWrapper>
      </Article>
    ))
  ), [])

  return (
    <>
      <h2>Lista artykułów</h2>
      {articleList}
    </>
  );
}

export default React.memo(BlogPage);