import React from 'react';
import AppContainer from './src/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';


export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <AppContainer />
    </Provider>
  );
}
