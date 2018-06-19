const getVisibleProducts = (products, filters, sortBy) => {

    const visibleProducts = products.filter((product) => {
        return !filters.includes(product.name);
    });

    visibleProducts.sort((a,b) => {
        if (sortBy === 'expensive') {
            return b.price - a.price;    
        } else {
            return a.price - b.price;
        }
    });

    return visibleProducts;
};

export default getVisibleProducts;