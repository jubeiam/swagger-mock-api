'use strict';

const path = require('path');
const mockApi = require('../dist/index');

const noop = () => {
  console.trace('* noop *')
}

const request = {
  method: 'get',
  url: '/pets/1'
};

const response = {
  setHeader: () => {},
  write: console.log.bind(console),
  end: noop
};

const next = () => {
  console.trace('* next *')
};

let api = mockApi({swaggerFile: path.join(__dirname, './test.yaml')});

api(request, response, next);
