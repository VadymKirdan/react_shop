import React from 'react';
import { addProduct } from '../actions/products';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:  this.props.productToEdit ? this.props.productToEdit.type : '',
            name:  this.props.productToEdit ? this.props.productToEdit.name : '',
            model: this.props.productToEdit ? this.props.productToEdit.model : '',
            price: this.props.productToEdit ? this.props.productToEdit.price : 0
        }
        this.onTypeChange  = this.onTypeChange.bind(this);
        this.onNameChange  = this.onNameChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onFormSubmit  = this.onFormSubmit.bind(this);
    }
    onTypeChange(e) {
        const type = e.target.value;
        this.setState(()=>({type: type}));
    }
    onNameChange(e) {
        const name = e.target.value;
        this.setState(()=>({name: name}));
    }
    onModelChange(e) {
        const model = e.target.value;
        this.setState(()=>({model: model}));
    }
    onPriceChange(e) {
        const price = e.target.value;
        this.setState(()=>({price: price}));
    }
    onFormSubmit(e) {
        e.preventDefault();
        const updateObj = {
            type:  this.state.type,
            name:  this.state.name,
            model: this.state.model,
            price: this.state.price
        }
        if (this.props.productToEdit) {
            this.props.handleUpdateProduct(updateObj);
        } else {
            this.props.addProduct(updateObj);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    Type:  <input type="text" onChange={this.onTypeChange}  value={this.state.type}  /><br />
                    Name:  <input type="text" onChange={this.onNameChange}  value={this.state.name}  /><br />
                    Model: <input type="text" onChange={this.onModelChange} value={this.state.model} /><br />
                    Price: <input type="text" onChange={this.onPriceChange} value={this.state.price} /><br />
                    <button>{this.props.productToEdit ? "Update Product" : "Add Product"}</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product))
    }
};

export default connect(undefined, mapDispatchToProps)(ProductForm);