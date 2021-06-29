var mongoose = require('mongoose');

// The userSchema is used to embedded docs in as post doc.
// There is no model and no 'facts' collection
var postSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
   posts:[postSchema],

}, {
  timestamps: true
});

module.exports = mongoose.model('user', userSchema);