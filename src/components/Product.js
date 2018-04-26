import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/products';
import { Thumbnail, Button, Col } from 'react-bootstrap';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    handleRemoveProduct() {
        this.props.removeProduct(this.props.product.id);
    }
    handleAddToCart() {
        this.props.addToCart(this.props.product);
    }
    render(props) {
        return (
            <Col xs={6} md={2}>
                <Thumbnail alt="Nokia 3310" src="images/nokia.png">
                    <h3>{this.props.product.name} {this.props.product.model}</h3>
                    <h5>Price: {this.props.product.price}$</h5>
                    <p>
                        <Button onClick={this.handleRemoveProduct} bsStyle="primary">Remove Product</Button>
                        <Button onClick={this.handleAddToCart} bsStyle="primary" className="product-buy-button">Buy</Button>
                        {/*<Link to={`/edit/${this.props.product.id}`}><h3>Edit Product</h3></Link>*/}
                    </p>
                </Thumbnail>
            </Col>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}
    
export default connect(undefined, mapDispatchToProps)(Product);