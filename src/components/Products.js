import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import getVisibleProducts from '../selectors/visibleProducts';

const Products = (props) => {
    return (
        <div>
            <div className="products-banner"><h1>Smartphones</h1></div>
            {props.products.map((product) => <Product key={product.id} product={product} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: getVisibleProducts(state.products, state.filters.filterNames, state.filters.sortBy)
    }
}

export default connect(mapStateToProps)(Products);

