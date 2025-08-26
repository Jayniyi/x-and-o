const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: '03-tic-tac-toe-starting-project',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

