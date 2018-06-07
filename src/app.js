import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import AppRouter from './routers/AppRouter';
import { addProduct } from './actions/products';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import 'normalize.css/normalize.css'; // css reset library
import './styles/style.scss';
import './firebase/firebase';

const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
 
// Stop listening to state updates
unsubscribe()

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Dispatch some actions
store.dispatch(addProduct({
    type: 'mobile',
    name: 'Nokia',
    model: '3310',
    price: 10000
}));

store.dispatch(addProduct({
    type: 'mobile',
    name: 'LG',
    model: 'A8',
    price: 15000
}));

ReactDOM.render(app, document.getElementById('app'));