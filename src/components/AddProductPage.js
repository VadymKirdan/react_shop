import React from 'react';
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import { startAddProduct } from '../actions/products';

class AddProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(product) {
        this.props.startAddProduct(product);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <div className="content-container">
                        <h1 className="product-form-label">Add Product</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProductForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddProduct: (product) => dispatch(startAddProduct(product))
    }
}

export default connect(undefined, mapDispatchToProps)(AddProductPage);