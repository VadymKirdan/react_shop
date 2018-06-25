import React from 'react';
import FormErrors from '../components/FormErrors';

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:  this.props.product ? this.props.product.type : '',
            name:  this.props.product ? this.props.product.name : '',
            model: this.props.product ? this.props.product.model : '',
            price: this.props.product ? this.props.product.price : '',
            formErrors: {
                type: '',
                name: '',
                model: '',
                price: ''
            }
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
        const { type, name, model, price } = this.state;
        const isValidForm = this.validateForm({type, name, model, price});
      
        if (isValidForm) {
            this.props.onSubmit({
                type,
                name,
                model,
                price: parseFloat(price, 10)
            });
        }
    }
    validateForm(product) {
        let isValidType;
        let isValidName;
        let isValidModel;
        let isValidPrice;
        const validationErrors = {};

        Object.keys(product).map((field) => {
            const fieldValue = product[field];
            switch(field) {
                case 'type':
                    isValidType = fieldValue.length >= 4;
                    validationErrors.type = isValidType ? '' : 'type is too short';
                    break;
                case 'name':
                    isValidName = fieldValue.length >= 2;
                    validationErrors.name = isValidName ? '' : 'name is too short';
                    break;
                case 'model':
                    isValidModel = fieldValue.length >= 2;
                    validationErrors.model = isValidModel ? '' : 'model is too short';
                    break;
                case 'price':
                    var numberRegex = /^[0-9]+$/;
                    isValidPrice = fieldValue.match(numberRegex);
                    validationErrors.price = isValidPrice ? '' : 'price is not valid';
                    break;
                default:
                    break;
            }
        });

        this.setState(() => 
            (
                { formErrors: {
                        type: validationErrors.type,
                        name: validationErrors.name,
                        model: validationErrors.model,
                        price: validationErrors.price 
                    }
                }
            )
        );

        if (!isValidType || !isValidName || !isValidModel || !isValidPrice) {
            return false;
        }

        return true;
    }
    
    render() {
        return (
            <div>
                <form className="product-form" onSubmit={this.onFormSubmit}>
                    <FormErrors formErrors={this.state.formErrors} />
                    <input type="text" placeholder="Type" className="form-input" onChange={this.onTypeChange}  value={this.state.type}  />
                    <input type="text" placeholder="Name" className="form-input" onChange={this.onNameChange}  value={this.state.name}  />
                    <input type="text" placeholder="Model" className="form-input" onChange={this.onModelChange} value={this.state.model} />
                    <input type="text" placeholder="Price" className="form-input" onChange={this.onPriceChange} value={this.state.price} />
                    <div>
                        <button className="form-button">{this.props.product ? "Update Product" : "Save Product"}</button>
                    </div>
                </form>
            </div>
        )
    }
}