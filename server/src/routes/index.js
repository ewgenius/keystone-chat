import keystone from 'keystone';
import middleware from './middleware';
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var routes = {
  views: importRoutes('./views')
};

exports = module.exports = function(app) {
  app.get('/', routes.views.index);
};
