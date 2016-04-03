'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  initLocals: function initLocals(req, res, next) {
    var locals = res.locals;
    locals.navLinks = [{
      label: 'Home',
      key: 'home',
      href: '/'
    }];
    locals.user = req.user;
    next();
  },
  flashMessages: function flashMessages(req, res, next) {
    var flashMessages = {
      info: req.flash('info'),
      success: req.flash('success'),
      warning: req.flash('warning'),
      error: req.flash('error')
    };
    res.locals.messages = _underscore2.default.any(flashMessages, function (msgs) {
      return msgs.length;
    }) ? flashMessages : false;
    next();
  },
  requireUser: function requireUser(req, res, next) {
    if (!req.user) {
      req.flash('error', 'Please sign in to access this page.');
      res.redirect('/keystone/signin');
    } else {
      next();
    }
  }
};