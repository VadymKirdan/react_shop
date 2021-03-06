import database from '../firebase/firebase';

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
});

export const startRemoveProduct = (id) => {
    return (dispatch) => {
        return database.ref(`products/${id}`).remove().then(() => {
            dispatch(removeProduct(id)); 
        });
    }
};

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const startAddProduct = ({type = "", name = "", model = "", price = 0} = {}) => {
    return (dispatch) => {
        const product = {type, name, model, price};
        //return statement for jest tests(promise chaining)
        return database.ref('products').push(product).then((ref) => {
            product.id = ref.key
            dispatch(addProduct(product));
        });
    };
};

export const editProduct = (id, updateObj) => ({
    type: 'EDIT_PRODUCT',
    id,
    updateObj
});

export const startEditProduct = (id, updateObj) => {
    return (dispatch) => {
        return database.ref(`products/${id}`).update(updateObj).then(() => {
            dispatch(editProduct(id, updateObj));
        });
    }
}

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const startSetProducts = () => {
    return (dispatch) => {
        return database.ref('products').once('value').then((snapshot) => {
            const products = [];
            snapshot.forEach((childSnapshot) => {
                const product = childSnapshot.val();
                product.id = childSnapshot.key;

                products.push(product);
                dispatch(setProducts(products));
            });
        });
    }
}

