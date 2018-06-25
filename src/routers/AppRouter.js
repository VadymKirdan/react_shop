import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingApp from '../components/ShoppingApp';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import AddProductPage from '../components/AddProductPage';
import EditProductPage from '../components/EditProductPage';
import SingleProductPage from '../components/SingleProductPage';
import ProductCart from '../components/ProductCart';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ShoppingApp} exact={true}/>
                <Route path="/help" component={HelpPage}/>
                <Route path="/create" component={AddProductPage}/>
                <Route path="/cart" component={ProductCart}/>
                <Route path="/edit/:id" component={EditProductPage}/>
                <Route path="/products/:id" component={SingleProductPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;