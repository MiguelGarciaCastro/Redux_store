// create redux store, use reducers defined in reducers.js
import { createStore } from 'redux';

import { reducer } from './reducers';

export default createStore(reducer);
