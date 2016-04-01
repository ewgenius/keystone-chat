'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

var User = new _keystone2.default.List('User');

User.add({
  name: {
    type: Types.Name,
    required: true,
    index: true
  },
  email: {
    type: Types.Email,
    initial: true,
    required: true,
    index: true
  },
  password: {
    type: Types.Password,
    initial: true,
    required: true
  }
}, 'Permissions', {
  isAdmin: {
    type: Boolean,
    label: 'Can access Keystone',
    index: true
  }
});

User.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});

User.defaultColumns = 'name, email, isAdmin';
User.register();