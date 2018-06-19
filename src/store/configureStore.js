import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        filters: filtersReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;