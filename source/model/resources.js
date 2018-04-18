var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var resourcesSchema = new Schema({
  name:     { type: String},
  url:      { type: String},
  position: { type: Array },

});

module.exports = mongoose.model('Resources', resourcesSchema);




