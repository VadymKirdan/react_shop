const productsDefaultState = [];
const productsReducer = (state = productsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product];
        case 'SET_PRODUCTS':
            return action.products;
        case 'REMOVE_PRODUCT':
            return state.filter((product) => {
                return product.id !== action.id;
            });
        case 'EDIT_PRODUCT':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        id: action.id,
                        type: action.updateObj.type,
                        name: action.updateObj.name,
                        model: action.updateObj.model,
                        price: action.updateObj.price
                    }
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}

export default productsReducer;