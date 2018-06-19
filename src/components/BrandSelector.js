import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions/filters';

class BrandSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const checked = target.checked;
        this.props.filterByName(value, checked);
    }
    render() {
        return (
            <fieldset>
                <legend>Select Brand</legend>
                {this.props.productNames.map((name) => {
                    return (
                        <div className="inputGroup">
                            <input type="checkbox" id={name} value={name} defaultChecked={true} onChange={this.handleChange}/>
                            <label for={name}>{name}</label>
                        </div>
                    );
                })}
            </fieldset>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterByName: (filterName, checked) => dispatch(filterByName(filterName, checked))
    }
}

export default connect(undefined, mapDispatchToProps)(BrandSelector);