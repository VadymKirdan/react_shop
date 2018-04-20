import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/products';
import { Thumbnail, Button, Col } from 'react-bootstrap';

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
            <Col xs={6} md={3}>
                <Thumbnail>
                    <h3>{this.props.product.name} {this.props.product.model}</h3>
                    <p>
                        <ol>
                            <li>{this.props.product.type}</li>
                            <li>{this.props.product.price}</li>
                        </ol>
                    </p>
                    <p>
                        <Button onClick={this.handleRemoveProduct} bsStyle="primary">Remove Product</Button>
                        <Button onClick={this.handleAddToCart} bsStyle="primary">Buy</Button>
                        <Link to={`/edit/${this.props.product.id}`}><h3>Edit Product</h3></Link>
                    </p>
                </Thumbnail>
            </Col>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}
    
export default connect(undefined, mapDispatchToProps)(Product);