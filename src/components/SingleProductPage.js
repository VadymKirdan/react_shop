import React from 'react';
import { connect } from 'react-redux';

const SingleProductPage = (props) => {
    return (
        <div>
            <p>{props.product.model}</p>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        product: state.products.find((product) => {
            return product.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(SingleProductPage);