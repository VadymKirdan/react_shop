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
    }
    render() {
        return (
            <div>
                {
                    this.state.products.map((product) => <Product key={product.id} product={product}/>)
                }
            </div>
        );
    }
}

export default Products;