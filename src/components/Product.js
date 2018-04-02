import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>{this.props.product.type}</li>
                    <li>{this.props.product.model}</li>
                    <li>{this.props.product.name}</li>
                    <li>{this.props.product.price}</li>
                </ol>
                <button onClick={(e) => this.props.handleProductRemove(this.props.product.id)}>Remove</button>
            </div>
        )
    }
}

export default Product;