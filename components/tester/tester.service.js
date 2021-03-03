const productService = require('../products/products.service');
const apiService = require('../api/api.service');
const groundTruthService = require('../groundTruth/groundTruth.service');

const runTester = async (callback) => {
  const result = [];
  const products = await productService.getProducts();

  await Promise.all(products.map(async (product) => {
    const sizeData = await apiService.extractSizeData(product.imageUrl);
    const score = groundTruthService.calculateScore(product.code, sizeData);

    result.push({code: product.code, score: score});
  }));

  callback(result);
}

exports.runTester = runTester;
