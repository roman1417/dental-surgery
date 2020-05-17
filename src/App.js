import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './index.css';
import theme from 'utils/theme';
import { Wrapper } from './App.css';
import { Navigation } from 'layouts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
