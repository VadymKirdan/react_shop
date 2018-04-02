import React from 'react';
import Product from './Product';

class Products extends React.Component {
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
    render() {
        return (
            <div>
                <button onClick={(e) => this.handleRemoveAllProducts()}>Remove All</button>
                {
                    this.state.products.map((product) => <Product key={product.id} product={product} handleProductRemove={this.handleProductRemove} />)
                }
            </div>
        );
    }
}

export default Products;