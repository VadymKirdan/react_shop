import uuid from 'uuid';

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
});

export const removeAllProducts = () => ({
    type: 'REMOVE_ALL_PRODUCTS',
});

export const addProduct = ({type = "", name = "", model = "", price = 0} = {}) => ({
    type: 'ADD_PRODUCT',
    product: {
        id: uuid(),
        type,
        name,
        model,
        price
    }
});

export const editProduct = (id, updateObj) => ({
    type: 'EDIT_PRODUCT',
    id,
    updateObj
});