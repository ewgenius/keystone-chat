require('dotenv').load();
var env = process.env.ENV || 'development';
if (env === 'development') {
  console.log('run in development mode');
  require('babel-core/register');
  require('./src/keystone.js');
}
if (env === 'production') {
  console.log('run in production mode');
  require('./build/keystone.js');
}
