const filtersDefaultState = {
    'filterNames': [],
    'sortBy': 'cheap'
}
const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_BY_NAME':
            if (action.checked) {
                return {
                    filterNames: state.filterNames.filter((filterName) => filterName != action.filterName),
                    sortBy: state.sortBy
                }
            } else {
                return {
                    filterNames: state.filterNames.concat(action.filterName),
                    sortBy: state.sortBy
                }
            }
        case 'SORT_BY_PRICE':
            return {
                filterNames: state.filterNames,
                sortBy: action.sortBy
            }
        default:
            return state;
    }
}

export default filtersReducer;