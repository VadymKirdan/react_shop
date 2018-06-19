import React from 'react';
import Products from './Products';
import ProductFilters from './ProductFilters';

const ShoppingApp = () => {
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

export default ShoppingApp;




