'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = MockData;

var _ParsersParser = require('./Parsers/Parser');

var _ParsersParser2 = _interopRequireDefault(_ParsersParser);

var parser = new _ParsersParser2['default']();

function MockData(definition) {
  var content = definition.content || {};
  var schema = (content['application/json'] || {}).schema;

  if (!schema) {
    if (process.env.debug) {
      console.warn('Schema not found');
    }

    return null;
  }

  return parser.parse(schema);
}

;
module.exports = exports['default'];