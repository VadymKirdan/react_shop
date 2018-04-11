import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/products';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    }
    handleRemoveProduct() {
        this.props.removeProduct(this.props.product.id);
    }
    render(props) {
        return (
            <div>
                <ol>
                    <li>{this.props.product.type}</li>
                    <li>{this.props.product.model}</li>
                    <li>{this.props.product.name}</li>
                    <li>{this.props.product.price}</li>
                </ol>
                <button onClick={this.handleRemoveProduct}>Remove Product</button>
                <Link to={`/edit/${this.props.product.id}`}><h3>Edit Product</h3></Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}
    
export default connect(undefined, mapDispatchToProps)(Product);