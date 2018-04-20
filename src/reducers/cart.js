const cartDefaultState = [];
const cartReducer = (state = cartDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.product];
        default:
            return state;
    }
}

export default cartReducer;