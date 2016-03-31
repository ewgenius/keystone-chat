'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_keystone2.default.init({
	'name': 'keystone-chat',
	'brand': 'keystone-chat',
	'sass': '../public',
	'static': '../public',
	'favicon': '../public/favicon.ico',
	'views': '../templates/views',
	'view engine': 'jade',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'
});

_keystone2.default.import('models');

_keystone2.default.set('locals', {
	_: _underscore2.default,
	env: _keystone2.default.get('env'),
	utils: _keystone2.default.utils,
	editable: _keystone2.default.content.editable
});

_keystone2.default.set('routes', _routes2.default);

_keystone2.default.set('nav', {
	'users': 'users'
});

_keystone2.default.start();