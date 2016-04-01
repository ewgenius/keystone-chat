import keystone from 'keystone';
const Types = keystone.Field.Types;

const Chat = new keystone.List('Chat');

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
