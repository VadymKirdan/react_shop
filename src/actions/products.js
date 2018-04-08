import uuid from 'uuid';

export const removeProduct = ({id} = {}) => ({
    type: 'REMOVE_PRODUCT',
    id: id
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