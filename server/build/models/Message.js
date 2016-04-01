'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;
var Message = new _keystone2.default.List('Message');

Message.add({
  text: {
    type: String
  },
  author: {
    type: Types.Relationship,
    ref: 'User'
  },
  chat: {
    type: Types.Relationship,
    ref: 'Chat'
  }
});

Message.register();