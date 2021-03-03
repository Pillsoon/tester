const groundTruthData = require('../../data/groundTruth.json');

const groundTruthMap = {};
groundTruthData.forEach((groundTruth) => {
  groundTruthMap[groundTruth.code] = groundTruth.data;
});

const get = (code) => {
  return groundTruthMap[code];
}

exports.get = get;
