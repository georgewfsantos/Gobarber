import React from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

// import { Container } from './styles';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffdd94" />
        <App />
      </PersistGate>
    </Provider>
  );
}
