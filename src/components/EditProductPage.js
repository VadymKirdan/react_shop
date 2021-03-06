import React from 'react';
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import { startEditProduct } from '../actions/products';

class EditProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(updateObj) {
        this.props.startEditProduct(this.props.product.id, updateObj);
        this.props.history.push('/');
    }
    render(props) {
        return (
            <div>
                <h1 className="product-form-label">Edit Product Form</h1>
                <ProductForm product={this.props.product} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        product: state.products.find((product) => {
            return product.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditProduct: (id, updateObj) => dispatch(startEditProduct(id, updateObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);