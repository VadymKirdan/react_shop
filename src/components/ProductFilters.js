import React from 'react';

class ProductFilters extends React.Component {
    render() {
        return (
            <div>
            <select value={'expensive'} onChange={(e) => {
                if (e.target.value === 'expensive') {
                   // dispatch action
                } else {
                    // dispatch action
                }
            }}>
                <option value="expensive">Expensive</option>
                <option value="cheap">Cheap</option>
            </select>
            </div>
        )
    }
}

export default ProductFilters;