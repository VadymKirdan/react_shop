import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map((product) => <Product key={product.id} product={product} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);