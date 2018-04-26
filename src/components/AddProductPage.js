import React from 'react';
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import { addProduct } from '../actions/products';

class AddProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(product) {
        this.props.addProduct(product);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1 className="product-form-label">Create Product Form</h1>
                <ProductForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(undefined, mapDispatchToProps)(AddProductPage);