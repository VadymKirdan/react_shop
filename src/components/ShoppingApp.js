import React from 'react';
import Products from './Products';
import ProductForm from './ProductForm';

class ShoppingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToEdit: undefined
        }
        this.handleRemoveAllProducts = this.handleRemoveAllProducts.bind(this);
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
        this.handleProductEdit = this.handleProductEdit.bind(this);
    }
    handleRemoveAllProducts() {
        this.setState( () => ({ products: [] }));
    }
    handleProductEdit(product) {
        this.setState( () => ({ productToEdit: product}));
    }
    handleUpdateProduct(product) {
        const productId = this.state.productToEdit.id;
        const updatedProducts = this.state.products.map((item) => {
            if (item.id === productId) {
                return {
                    id: productId,
                    type: product.type,
                    name: product.name,
                    model: product.model,
                    price: product.price
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
                <Products handleProductEdit={this.handleProductEdit} handleUpdateProduct={this.handleUpdateProduct} productToEdit={this.state.productToEdit} handleRemoveAllProducts={this.handleRemoveAllProducts} />
                <ProductForm/>
            </div>
        )
    }
}

export default ShoppingApp;