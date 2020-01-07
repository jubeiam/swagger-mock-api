'use strict';

import Parser from './Parsers/Parser'
let parser = new Parser();

export default function MockData(definition) {
  const def = definition.schema ? definition : definition.content['application/json']
  const schema = def.schema;


  if (!schema) {
    if (process.env.debug) {
      console.warn('Schema not found');
    }

    return null;
  }

  return parser.parse(schema);
};
