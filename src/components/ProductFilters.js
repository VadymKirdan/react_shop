import React from 'react';
import { connect } from 'react-redux';
import BrandSelector from '../components/BrandSelector';
import getProductNames from '../selectors/productNames';
import { sortByPrice } from '../actions/filters';

const ProductFilters = (props) => {
    return (
        <div>
            <BrandSelector productNames={props.productNames}/>
            <fieldset>
                <legend>Sort by Price</legend>
                {<select value={props.sortBy} onChange={(e) => {
                    if (e.target.value === 'expensive') {
                        props.sortByPrice('expensive');
                    } else {
                        props.sortByPrice('cheap');
                    }
                }}>
                    <option value="expensive">Expensive</option>
                    <option value="cheap">Cheap</option>
                </select>}
            </fieldset>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productNames: getProductNames(state.products),
        sortBy: state.filters.sortBy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortByPrice: (sortBy) => dispatch(sortByPrice(sortBy))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);