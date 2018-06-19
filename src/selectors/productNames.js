const getProductNames = (products) => {
    const productNames = [];

    products.forEach((product) => {
        if (!productNames.includes(product.name)) {
            productNames.push(product.name);
        }
    });

    return productNames;
};

export default getProductNames;