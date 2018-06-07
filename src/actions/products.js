import uuid from 'uuid';
import database from '../firebase/firebase';

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
});

/*export const addProduct = ({type = "", name = "", model = "", price = 0} = {}) => ({
    type: 'ADD_PRODUCT',
    product: {
        id: uuid(),
        type,
        name,
        model,
        price
    }
});*/

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const startAddProduct = (product) => {
    return (dispatch) => {
        database.ref('products').push(product).then((ref) => {
            dispatch(addProduct({
                id: ref.key,
                type: product.type,
                name: product.name,
                model: product.model,
                price: product.price
            }));
        });
    };
};

export const editProduct = (id, updateObj) => ({
    type: 'EDIT_PRODUCT',
    id,
    updateObj
});

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const startSetProducts = () => {
    return (dispatch) => {
        return database.ref('products').once('value').then((snapshot) => {
            let products = [];
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.id = childSnapshot.key;

                products.push(item);

                dispatch(setProducts(products));
            });
        });
    }
}

