const swaggerAutogen = require('swagger-autogen')();
const path = require('path');

const outputFile = path.resolve(__dirname, '../swagger.json');
const endpointsFiles = [path.resolve(__dirname, 'app.js')];

swaggerAutogen(outputFile, endpointsFiles);