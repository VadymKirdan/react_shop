import React from 'react';
import ProductForm from './ProductForm';

class EditProductPage extends React.Component {
    render(props) {
        return (
            <div>Product to Edit: {this.props.match.params.id}</div>
        )
    }
}

export default EditProductPage;