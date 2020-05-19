import styled from 'styled-components';
import PropTypes from 'prop-types';

export const LogoWrapper = styled.div`
  width: 72px;
  height: 72px;  
`;

export const ImageContainer = styled.img`
  display: block;
  height: 100%;
  padding: 10px;
`;

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};