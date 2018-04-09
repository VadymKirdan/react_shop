import uuid from 'uuid';

export const removeProduct = ({id} = {}) => ({
    type: 'REMOVE_PRODUCT',
    id: id
});

export const removeAllProducts = () => ({
    type: 'REMOVE_ALL_PRODUCTS',
});

export const addProduct = ({type = "", name = "", model = "", price = ""} = {}) => ({
    type: 'ADD_PRODUCT',
    product: {
        id: uuid(),
        type: type,
        name: name,
        model: model,
        price: price
    }
});

export const editProduct = (id, updateObj) => ({
    type: 'EDIT_PRODUCT',
    id: id,
    updateObj: updateObj
});