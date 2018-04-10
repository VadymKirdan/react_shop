const productsDefaultState = {products:[]};
const productsReducer = (state = productsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                products: [...state.products, action.product]
            }
        case 'REMOVE_PRODUCT':
            const products = state.products.filter((product) => {
                return product.id !== action.id;
            });
            return {
                products
            }
        case 'REMOVE_ALL_PRODUCTS':
            return {
                products: []
            }
        case 'EDIT_PRODUCT':
            const updatedProducts = state.products.map((item) => {
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
            return {
                products: updatedProducts
            }
        default:
            return state;
    }
}

export default productsReducer;