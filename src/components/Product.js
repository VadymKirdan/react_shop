import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/products';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.removeProduct(this.props.product.id);
    }
    render(props) {
        return (
            <div>
                {this.props.productToEdit && this.props.productToEdit.id === this.props.product.id 
                ?
                    <ProductForm productToEdit={this.props.productToEdit} handleUpdateProduct={this.props.handleUpdateProduct}/>
                : 
                    <ol>
                        <li>{this.props.product.type}</li>
                        <li>{this.props.product.model}</li>
                        <li>{this.props.product.name}</li>
                        <li>{this.props.product.price}</li>
                    </ol>}
                    {!this.props.productToEdit && <button onClick={this.onClick}>Remove</button>}
                    {!this.props.productToEdit && <button onClick={(e) => this.props.handleProductEdit(this.props.product)}>Edit</button>}
                    <Link to={`/edit/${this.props.product.id}`}><h3>Edit Link</h3></Link>
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