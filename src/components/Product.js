import React from 'react';
import ProductForm from './ProductForm';

class Product extends React.Component {
    render() {
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
                    {!this.props.productToEdit && <button onClick={(e) => this.props.handleProductRemove(this.props.product.id)}>Remove</button>}
                    {!this.props.productToEdit && <button onClick={(e) => this.props.handleProductEdit(this.props.product)}>Edit</button>}
            </div>
        )
    }
}

export default Product;