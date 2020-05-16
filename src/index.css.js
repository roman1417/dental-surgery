import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.small}px;
  ${({ theme: { mediaQuery } }) => mediaQuery.smartphoneLarge`
    font-size: ${({ theme: { fontSize } }) => fontSize.base}px;
  `}
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
};
`