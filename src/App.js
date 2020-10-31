import React from 'react';
import Home from './containers/Home';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 10vh;
    background-color: ${(props) => props.theme.primaryBg};
    font-size: 18px;
    color: ${(props) => props.theme.bodyColor};
    font-family: 'Noto Sans', sans-serif;
  }
`;

const theme = {
  primaryBg: '#18191A',
  secondaryBg: '#242526',
  specialBg: '#3A3B3C',
  bodyColor: '#E4E6EB',
  headerColor: '#ffffff',
  specialColor: '#5E8BFB',
  hoverColor: '#404e5d',
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
