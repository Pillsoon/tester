const productData = require('./products.data');

const getProducts = async () => {
  return await productData.getProducts();
}

exports.getProducts = getProducts;
