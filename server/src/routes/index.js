import keystone from 'keystone';
import middleware from './middleware';
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

const routes = {
  views: importRoutes('./views')
};

const initRoutes = function(app) {
  app.get('/', routes.views.index);
};

export default initRoutes;
