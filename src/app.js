import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { startSetProducts } from './actions/products';
import 'normalize.css/normalize.css'; // css reset library
import './styles/style.scss';

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));


store.dispatch(startSetProducts()).then(() => {
    ReactDOM.render(app, document.getElementById('app'));
});

