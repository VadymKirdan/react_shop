import React from 'react';
import Header from './Header';
import Products from './Products';
import ProductForm from './ProductForm';

class ShoppingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {   
                    id: '1',
                    type: 'mobile',
                    name: 'Nokia',
                    model: '3310',
                    price: 10000
                },{
                    id: '2',
                    type: 'watch',
                    name: 'Fossil',
                    model: 'gen 2',
                    price: 200000
                },{
                    id: '3',
                    type: 'laptop',
                    name: 'Lenovo',
                    model: 'T360',
                    price: 5000000
                }
            ]
        }
        this.handleProductRemove = this.handleProductRemove.bind(this);
        this.handleRemoveAllProducts = this.handleRemoveAllProducts.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleProductRemove(id) {
        let products = this.state.products.filter((product) => {
            return product.id !== id;
        });
        this.setState( () => ({ products: products }));
    }
    handleRemoveAllProducts() {
        this.setState( () => ({ products: [] }));
    }
    handleAddProduct(product) {
        product.id = this.state.products.length + 1;
        this.setState( () => ({products: [...this.state.products, product]}));
    }
    render() {
        return (
            <div>
                <Header />
                <Products products={this.state.products} handleProductRemove={this.handleProductRemove} handleRemoveAllProducts={this.handleRemoveAllProducts} />
                <ProductForm handleAddProduct={this.handleAddProduct} />
            </div>
        )
    }
}

export default ShoppingApp;