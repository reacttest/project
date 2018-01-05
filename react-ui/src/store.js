import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
    router: routerReducer
    }), composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;