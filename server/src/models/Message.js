import keystone from 'keystone';
const Types = keystone.Field.Types;
const Message = new keystone.List('Message');

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
