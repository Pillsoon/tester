const groundTruthData = require('./groundTruth.data');

const calculateScore = (productCode, sizeData) => {
  const groundTruth = groundTruthData.get(productCode);
  let total = 0;
  let matched = 0;

  for (let key in groundTruth) {
    total += groundTruth[key].length;

    const intersection = groundTruth[key].filter(value => sizeData[key].includes(value));
    matched += intersection.length;
  }

  return total === 0 ? 0 : matched / total;
}

exports.calculateScore = calculateScore;
