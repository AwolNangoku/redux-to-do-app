import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import  { storeConfiguration } from './services/reduxStoreConfig';
import App from './components/app/';

const { store, persistor } = storeConfiguration();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    	<App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
