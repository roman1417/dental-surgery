import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  margin-top: 72px;
  height: 60vh;
  ${media.smLandscape`
  height: calc(100vh - 72px);
  `};
  ${media.sm`
  height: 60vh;
  `};
  ${media.md`
  height: 50vh;
  `};
`;

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;  
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  left: 5%;
  top: 60%;
  font-size: 2rem;
  ${({ theme: { spacing } }) => media.smLandscape`
  left: ${spacing.main * 2}px;
  `};
  ${({ theme: { spacing } }) => media.sm`
  left: ${spacing.main * 2}px;
  `};
`;

HeaderImage.propTypes = {
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}