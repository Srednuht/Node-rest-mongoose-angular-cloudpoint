var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usersSchema = new mongoose.Schema({
  id:    { type: String },
});

module.exports = mongoose.model('Users', usersSchema);


