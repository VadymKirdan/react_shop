import React from 'react';
import Products from './Products';
import ProductFilters from './ProductFilters';

export default class ShoppingApp extends React.Component {
    render() {
        return (
            <div className="app">
                <aside >
                    <ProductFilters />
                </aside>
                <main>
                    <Products />
                </main>
            </div>
        )
    }
}



