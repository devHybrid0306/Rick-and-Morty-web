import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';
import { GlobalStyles, theme } from './theme';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.default}>
        <GlobalStyles />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
