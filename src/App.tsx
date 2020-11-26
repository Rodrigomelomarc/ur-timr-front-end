import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/globals';

import history from './services/history';
import Routes from './routes';
import { store, persistor } from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
