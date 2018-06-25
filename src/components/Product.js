import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveProduct } from '../actions/products';
import { addToCart} from '../actions/cart';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    handleRemoveProduct() {
        this.props.startRemoveProduct(this.props.product.id);
    }
    handleAddToCart() {
        this.props.addToCart(this.props.product);
    }
    render(props) {
        return (
            <div className="product">
                <div className="image-wrapper">
                    <img src="images/nokia.png" alt="Phone" />
                </div>
                <h5 className="product-name">{this.props.product.name} {this.props.product.model}</h5>
                <h5 className="product-price">{this.props.product.price}$</h5>
                {/*<a onClick={this.handleRemoveProduct}>Remove Product</a>*/}
                <a onClick={this.handleAddToCart} className="product-buy-button">Add To Cart</a>
                {/*<Link to={`/edit/${this.props.product.id}`}><h3>Edit Product</h3></Link>*/}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        startRemoveProduct: (id) => dispatch(startRemoveProduct(id))
    }
}
    
export default connect(undefined, mapDispatchToProps)(Product);