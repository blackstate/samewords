import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Searchbox from './components/Searchbox';
import Home from './containers/Home';
import Main from './containers/Main';

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 8vh;
    padding-bottom: 8vh;
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
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <Searchbox />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:word' exact component={Main} />
          </Switch>
        </>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
