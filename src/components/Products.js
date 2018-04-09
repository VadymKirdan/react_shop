import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { removeAllProducts } from '../actions/products';

class Products extends React.Component {
    render() {
        return (
            <div>
                <button onClick={(e) => this.props.removeAllProducts()}>Remove All</button>
                {
                    this.props.products.map((product) => <Product key={product.id} product={product} handleUpdateProduct={this.props.handleUpdateProduct}
                    productToEdit={this.props.productToEdit} handleProductEdit={this.props.handleProductEdit} />)
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllProducts: () => dispatch(removeAllProducts())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);