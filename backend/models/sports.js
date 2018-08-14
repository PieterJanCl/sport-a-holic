var mongoose = require('mongoose');

var SportSchema = mongoose.Schema({
    name: String,
    newSport: Boolean
})

mongoose.model('Sport', SportSchema);
