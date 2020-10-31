import React from 'react';
import Home from './containers/Home';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 10vh;
    background-color: ${(props) => props.theme.primaryBg};
    font-size: 18px;
  }
`;

const theme = {
  primaryBg: '#18191A',
  secondaryBg: '242526',
  bodyColor: '#E4E6EB',
  headerColor: '#ffffff',
  specialColor: '#5E8BFB',
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
