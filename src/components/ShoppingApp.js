import React from 'react';
import Header from './Header';
import Products from './Products';

class ShoppingApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Products />
            </div>
        )
    }
}

export default ShoppingApp;