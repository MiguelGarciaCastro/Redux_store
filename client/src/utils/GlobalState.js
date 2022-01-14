// refactored for redux: bring in store from store.js
// export provider component to wrap app with
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}