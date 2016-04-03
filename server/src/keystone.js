import keystone from 'keystone';
import _ from 'underscore';
import routes from './routes';
import SocketService from './lib/socket.js';

keystone.init({
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

keystone.import('models');

keystone.set('locals', {
	_: _,
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', routes);

keystone.set('nav', {
	'users': 'users'
});

keystone.start(() => {
	keystone.mongoose.Promise = Promise;

	keystone.socket = new SocketService();
});
