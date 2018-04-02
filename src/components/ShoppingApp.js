import React from 'react';
import Header from './Header';
import Products from './Products';
import ProductForm from './ProductForm';

class ShoppingApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Products />
                <ProductForm />
            </div>
        )
    }
}

export default ShoppingApp;