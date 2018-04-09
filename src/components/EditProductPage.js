import React from 'react';
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import { editProduct } from '../actions/products';

class EditProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    };
    onSubmit(id, updateObj) {
        this.props.editProduct(id, updateObj)
        this.props.history.push('/');
    };
    render(props) {
        return (
            <div>
                Product to Edit: {this.props.match.params.id}
                <ProductForm productToEdit={this.props.productToEdit} onSubmit={this.onSubmit}/>
            </div>
        )
    };
}

const mapStateToProps = (state, props) => {
    return {
        productToEdit: state.products.find((product) => {
            return product.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProduct: (id, updateObj) => dispatch(editProduct(id, updateObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);