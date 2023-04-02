const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

const thoughtsSchema = new Schema(
{
  thoughtText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
    reactionBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}
);

const Thought = model('thought', thoughtsSchema);

module.exports = Thought