import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'ss',
            name: '',
            model: '',
            price: 0
        }
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
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
    render() {
        return (
            <div>
                <br />
                <form>
                    Type:  <input type="text" onChange={this.onTypeChange} value={this.state.type}/><br />
                    Name:  <input type="text" onChange={this.onNameChange} value={this.state.name}/><br />
                    Model: <input type="text" onChange={this.onModelChange} value={this.state.model}/><br />
                    Price: <input type="text" onChange={this.onPriceChange} value={this.state.price}/><br />
                    <button>Add Product</button>
                </form>
            </div>
        )
    }
}

export default ProductForm;