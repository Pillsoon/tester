const testerService = require('./tester.service');

exports.start = async (_, res) => {
  testerService.runTester(result => {
    res.json(result);
  });
}
