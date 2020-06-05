import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const margin = css`
margin-bottom: ${({ theme: { spacing } }) => spacing.main / 2}px;
`;

export const HomeTitle = styled.h2`
  ${margin};
  text-transform: uppercase;
`;

export const HomeSubtitle = styled.h3`
  ${margin};
`;

export const HomeDescription = styled.p`
  ${margin};
  text-align: justify;
  hyphens: auto;
`;

export const HomeImageWrapper = styled.div`
  width: 100%;
  margin: ${({ theme: { spacing } }) => `${spacing.main * 2}px auto`};
  ${media.smLandscape`
  width: 80%;
  `};
  ${media.sm`
  width: 70%;
  `};
  ${media.lg`
  width: 60%;
  `};
`;

export const HomeImage = styled.img`
  display: block;
  width: 100%;
`;

HomeImage.propTypes = {
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

