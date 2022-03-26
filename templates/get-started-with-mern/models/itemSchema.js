const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: String,
  emoji: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: Number
}, {
  timestamps: true
});

module.exports = itemSchema;