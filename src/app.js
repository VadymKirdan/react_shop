import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppRouter from './routers/AppRouter';
import { addProduct } from './actions/products';
import productsReducer from './reducers/products';
import 'normalize.css/normalize.css'; // css reset library
import './styles/style.scss';

const store = createStore(productsReducer);

// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
 
// Dispatch some actions

store.dispatch(addProduct({
    type: 'mobile',
    name: 'Nokia',
    model: '3310',
    price: 10000
}));

// Stop listening to state updates
unsubscribe()

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'));