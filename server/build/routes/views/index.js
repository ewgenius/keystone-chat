'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (req, res) {
	var view = new _keystone2.default.View(req, res);
	var locals = res.locals;
	locals.section = 'home';
	view.render('index');
};