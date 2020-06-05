import { createGlobalStyle } from 'styled-components';
import { media } from 'utils/mixins';

export default createGlobalStyle`

html {
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.small}px;
  ${({ theme: { fontSize } }) => media.sm`
    font-size: ${fontSize.base}px;
  `};   
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
};

p {
  line-height: 1.6;
}
`