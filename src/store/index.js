import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers.js';

export default createStore(reducers, applyMiddleware(thunk));
