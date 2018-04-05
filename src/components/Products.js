import React from 'react';
import Product from './Product';

class Products extends React.Component {
    render() {
        return (
            <div>
                <button onClick={(e) => this.props.handleRemoveAllProducts()}>Remove All</button>
                {
                    this.props.products.map((product) => <Product key={product.id} product={product} handleUpdateProduct={this.props.handleUpdateProduct}
                    productToEdit={this.props.productToEdit} handleProductEdit={this.props.handleProductEdit} handleProductRemove={this.props.handleProductRemove} />)
                }
            </div>
        );
    }
}

export default Products;