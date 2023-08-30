import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// STYLE
import { theme } from "./assets/theme";
import { GlobalStyle } from './assets/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);