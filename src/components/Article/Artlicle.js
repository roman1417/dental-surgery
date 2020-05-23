import React from 'react';
import PropTypes from 'prop-types';

import articles from 'utils/articles';
import {
  ArticleWrapper,
  ArticleTitle,
  AtricleImageWrapper,
  ArticleImage,
} from './Article.css'

const Article = ({ articleId }) => {
  const index = articleId - 1;
  return (
    <ArticleWrapper>
      <ArticleTitle>{articles[index].title}</ArticleTitle>
      <p>{articles[index].initialText}</p>
      <AtricleImageWrapper>
        <ArticleImage
          srcSet={articles[index].srcSet}
          sizes='(max-width: 640px) 600px, (max-width: 1280px) 1200px, 1800px'
          src={articles[index].src}
          alt={articles[index].alt}
        />
      </AtricleImageWrapper>
      <p>{articles[index].allText}</p>
    </ArticleWrapper>
  );
}

Article.propTypes = {
  articleId: PropTypes.number.isRequired,
}

export default React.memo(Article);