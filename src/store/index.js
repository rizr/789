import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import http from '../utils/http';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const rootReducer = combineReducers(reducers);

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(http))
    )
);