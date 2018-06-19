export const filterByName = (filterName, checked) => {
    return {
        type: 'FILTER_BY_NAME',
        filterName,
        checked
    }
}

export const sortByPrice = (sortBy) => {
    return {
        type: 'SORT_BY_PRICE',
        sortBy
    }
}