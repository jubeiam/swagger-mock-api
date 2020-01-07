'use strict';

import Parser from './Parsers/Parser'
let parser = new Parser();

export default function MockData(definition) {
  const content = definition.content || {}
  const schema = (content['application/json'] || {}).schema;


  if (!schema) {
    if (process.env.debug) {
      console.warn('Schema not found');
    }

    return null;
  }

  return parser.parse(schema);
};
