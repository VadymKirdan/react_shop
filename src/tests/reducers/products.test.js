import products from '../fixtures/products';
import productsReducer from '../../reducers/products';

test('should setup default state', () => {
    const state = productsReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add product to store', () => {
    const product = {
        id: '4',
        type: 'mobile',
        name: 'Lenovo',
        model: 'T210',
        price: 4000
    }
    const action = {
        type: 'ADD_PRODUCT',
        product
    }
    const state = productsReducer(products, action);
    expect(state).toEqual([...products, action.product]);
});

test('should remove product from store', () => {
    const action = {
        type: 'REMOVE_PRODUCT',
        id: products[1].id
    }
    const state = productsReducer(products, action);
    expect(state).toEqual([products[0], products[2]]);
});

test('should not remove products if id doesn\'t exist', () => {
    const action = {
        type: 'REMOVE_PRODUCT',
        id: '5'
    }
    const state = productsReducer(products, action);
    expect(state).toEqual(products);
});

test('should edit existing product in store', () => {
    const action = {
        type: 'EDIT_PRODUCT',
        id: '2',
        updateObj: {
            type: 'smartphone'
        }
    }
    const state = productsReducer(products, action);
    expect(state[1].type).toBe('smartphone');
});


test('should not edit product in store if it doesn\'t exist', () => {
    const action = {
        type: 'EDIT_PRODUCT',
        id: '6',
        updateObj: {
            type: 'smartphone'
        }
    }
    const state = productsReducer(products, action);
    expect(state).toEqual(products);
});

test('should set products', () => {
    const action = {
        type: 'SET_PRODUCTS',
        products
    }
    const state = productsReducer([products[0], products[2]], action);
    expect(state).toEqual(products);
});