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
    articles.map(({ id, title, initialText }) => (
      <Article key={id}>
        <Separator />
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleInitialText>{initialText}</ArticleInitialText>
        <ArtticleButtonWrapper>
          <ScrollIntoView selector='#main'>
            <Button variant='article' to={`/article/${id}`}>
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