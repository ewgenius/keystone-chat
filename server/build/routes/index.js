'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var importRoutes = _keystone2.default.importer(__dirname);

_keystone2.default.pre('routes', _middleware2.default.initLocals);
_keystone2.default.pre('render', _middleware2.default.flashMessages);

var routes = {
  views: importRoutes('./views')
};

exports = module.exports = function (app) {
  app.get('/', routes.views.index);
};