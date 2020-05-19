import styled from 'styled-components';
import PropTypes from 'prop-types';

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  margin-top: 72px;
  height: 60vh;  
`;

export const HeaderImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  /* visibility: hidden;   */
`;

HeaderImage.propTypes = {
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}