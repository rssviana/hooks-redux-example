import { createStore } from 'redux';

import roorReducer from './ducks';

const store = createStore(roorReducer);

export default store;