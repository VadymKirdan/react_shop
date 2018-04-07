import React from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};
export default connect(mapStateToProps)(Products);