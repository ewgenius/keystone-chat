'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

var Chat = new _keystone2.default.List('Chat');

Chat.add({
  text: {
    type: String
  },
  users: {
    type: Types.Relationship,
    ref: 'User',
    many: true
  }
});

Chat.register();