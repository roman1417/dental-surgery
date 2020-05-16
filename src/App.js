import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './index.css';
import theme from 'utils/theme';
import { Wrapper } from './App.css';
import { Navigation } from 'layouts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navigation />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
