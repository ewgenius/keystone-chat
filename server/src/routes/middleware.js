import _ from 'underscore';

export default {
  initLocals(req, res, next) {
    var locals = res.locals;
    locals.navLinks = [{
      label: 'Home',
      key: 'home',
      href: '/'
    }];
    locals.user = req.user;
    next();
  },

  flashMessages(req, res, next) {
    var flashMessages = {
      info: req.flash('info'),
      success: req.flash('success'),
      warning: req.flash('warning'),
      error: req.flash('error')
    };
    res.locals.messages = _.any(flashMessages, function(msgs) {
      return msgs.length;
    }) ? flashMessages : false;
    next();
  },

  requireUser(req, res, next) {
    if (!req.user) {
      req.flash('error', 'Please sign in to access this page.');
      res.redirect('/keystone/signin');
    } else {
      next();
    }
  }
}
