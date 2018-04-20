import {addProduct, editProduct, removeProduct, removeAllProducts} from '../../actions/products';

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

test('should setup add product action object with provided values', () => {
    const action = addProduct({
        type: 'mobile',
        name: 'Nokia',
        model: '3310',
        price: 10000
    });
    expect(action).toEqual({
        type: 'ADD_PRODUCT',
        product: {
            id: expect.any(String),
            type: 'mobile',
            name: 'Nokia',
            model: '3310',
            price: 10000
        }
    });
});

test('should setup add product action object with default values', () => {
    const action = addProduct({});
    expect(action).toEqual({
        type: 'ADD_PRODUCT',
        product: {
            id: expect.any(String),
            type: '',
            name: '',
            model: '',
            price: 0
        }
    });
});