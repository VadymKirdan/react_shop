import React from 'react';
import Header from './Header';
import Products from './Products';
import ProductForm from './ProductForm';

class ShoppingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToEdit: undefined,
            products: [
                {   
                    id: '1',
                    type: 'mobile',
                    name: 'Nokia',
                    model: '3310',
                    price: 10000
                },{
                    id: '2',
                    type: 'watch',
                    name: 'Fossil',
                    model: 'gen 2',
                    price: 200000
                },{
                    id: '3',
                    type: 'laptop',
                    name: 'Lenovo',
                    model: 'T360',
                    price: 5000000
                }
            ]
        }
        this.handleProductRemove = this.handleProductRemove.bind(this);
        this.handleRemoveAllProducts = this.handleRemoveAllProducts.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
        this.handleProductEdit = this.handleProductEdit.bind(this);
    }
    handleProductRemove(id) {
        let products = this.state.products.filter((product) => {
            return product.id !== id;
        });
        this.setState( () => ({ products: products }));
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
    handleAddProduct(product) {
        product.id = this.state.products.length + 1;
        this.setState( () => ({products: [...this.state.products, product]}));
    }
    render() {
        return (
            <div>
                <Header />
                <Products products={this.state.products} handleProductEdit={this.handleProductEdit} handleUpdateProduct={this.handleUpdateProduct} productToEdit={this.state.productToEdit} handleProductRemove={this.handleProductRemove} handleRemoveAllProducts={this.handleRemoveAllProducts} />
                <ProductForm handleAddProduct={this.handleAddProduct}/>
            </div>
        )
    }
}

export default ShoppingApp;