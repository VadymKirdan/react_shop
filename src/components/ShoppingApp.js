import React from 'react';
import Products from './Products';
import ProductForm from './ProductForm';

class ShoppingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToEdit: undefined
        }
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
        this.handleProductEdit = this.handleProductEdit.bind(this);
    }
    handleProductEdit(product) {
        this.setState( () => ({ productToEdit: product}));
    }
    handleUpdateProduct(product) {
        const productId = this.state.productToEdit.id;
        const updatedProducts = this.state.products.map((item) => {
            if (item.id === action.id) {
                return {
                    id: productId,
                    type: action.updateObj.type,
                    name: action.updateObj.name,
                    model: action.updateObj.model,
                    price: action.updateObj.price
                }
            } else {
                return item;
            }
        });
        this.setState(()=>({
            products: updatedProducts,
            productToEdit: undefined
        }));
    }
    render() {
        return (
            <div>
                <Products handleProductEdit={this.handleProductEdit} handleUpdateProduct={this.handleUpdateProduct} productToEdit={this.state.productToEdit} />
                <ProductForm/>
            </div>
        )
    }
}

export default ShoppingApp;