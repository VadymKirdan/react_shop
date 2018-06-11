import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddProduct, 
        addProduct, 
        startEditProduct,
        editProduct,
        removeProduct, 
        setProducts, 
        startSetProducts, 
        startRemoveProduct} from '../../actions/products';
import products from '../fixtures/products';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

//TODO: create separate database for testing purposes
beforeEach((done) => {
    const productsData = {};
    products.forEach(({id, type, name, model, price}) => {
        productsData[id] = {type, name, model, price};
    });
    database.ref('products').set(productsData).then(() => {
        done();
    });
});

test('should setup remove product action object', () => {
    const action = removeProduct('1');
    expect(action).toEqual({
        type: 'REMOVE_PRODUCT',
        id: '1'
    });
});

test('should setup edit product action object', () => {
    const updateObj = {
        name: 'samsung',
        model: 's18'
    }
    const action = editProduct('1', updateObj);
    expect(action).toEqual({
        type: 'EDIT_PRODUCT',
        id: '1',
        updateObj
    });
});

test('should setup add product action object ', () => {
    const action = addProduct(products[1]);
    expect(action).toEqual({
        type: 'ADD_PRODUCT',
        product: products[1]
    });
});

test('should add product to database and store', (done) => {
    const store = createMockStore({});
    const product = {
        type: 'mobile',
        name: 'Nokia',
        model: '3310',
        price: 10000
    }
    store.dispatch(startAddProduct(product)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_PRODUCT',
            product: {
                id: expect.any(String),
                type: product.type,
                name: product.name,
                model: product.model,
                price: product.price 
            }
        });
        /*database.ref(`products/${actions[0].product.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(product);
            done();
        });*/
        return database.ref(`products/${actions[0].product.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(product);
        done();
    });
});

test('should add product with default values to database and store', (done) => {
    const store = createMockStore({});
    const productDefaults = {
        type: '',
        name: '',
        model: '',
        price: 0
    }
    store.dispatch(startAddProduct()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_PRODUCT',
            product: {
                id: expect.any(String),
                type: productDefaults.type,
                name: productDefaults.name,
                model: productDefaults.model,
                price: productDefaults.price 
            }
        });
        return database.ref(`products/${actions[0].product.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(productDefaults);
        done();
    });
});

test('should setup set products action object with data', () => {
    const action = setProducts(products);
    expect(action).toEqual({
        type: 'SET_PRODUCTS',
        products
    });
});

test('should fetch products from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetProducts()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_PRODUCTS',
            products
        });
        done();
    });
});

test('should remove product from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startRemoveProduct('1')).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_PRODUCT',
            id: '1'
        });
        return database.ref(`products/${actions[0].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
    });
});

test('should edit product in database', (done) => {
    const store = createMockStore({});
    const id = products[0].id;
    const updateObj = {
        name: 'Nokia',
        model: 'T19'
    };
    store.dispatch(startEditProduct(id, updateObj)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_PRODUCT',
            id,
            updateObj
        });
        return database.ref(`products/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val().name).toBe(updateObj.name);
            expect(snapshot.val().model).toBe(updateObj.model);
            done();
        });
    });
});
