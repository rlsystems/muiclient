import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './app/layout/App';
import {createBrowserHistory} from 'history';
import { Router } from 'react-router-dom';


export const history = createBrowserHistory();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router history={history}>
      <App />
    </Router>
  
  </ThemeProvider>,
  document.querySelector('#root'),
);
