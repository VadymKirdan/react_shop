import React from 'react';
import {Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:  this.props.product ? this.props.product.type : '',
            name:  this.props.product ? this.props.product.name : '',
            model: this.props.product ? this.props.product.model : '',
            price: this.props.product ? this.props.product.price : 0
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
        this.props.onSubmit({
            type:  this.state.type,
            name:  this.state.name,
            model: this.state.model,
            price: this.state.price
        });
    }
    render() {
        return (
            <Form onSubmit={this.onFormSubmit} horizontal>
                <FormGroup controlId="formHorizontalType">
                    <Col componentClass={ControlLabel} sm={2}>
                        Type
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Type" onChange={this.onTypeChange}  value={this.state.type} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Name" onChange={this.onNameChange}  value={this.state.name} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalModel">
                    <Col componentClass={ControlLabel} sm={2}>
                        Model
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Model" onChange={this.onModelChange}  value={this.state.model} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPrice">
                    <Col componentClass={ControlLabel} sm={2}>
                        Price
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Price" onChange={this.onPriceChange}  value={this.state.price} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={3}>
                        <Button type="submit">{this.props.product ? "Update Product" : "Add Product"}</Button>
                    </Col>
              </FormGroup>
            </Form>
        )
    }
}