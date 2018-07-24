var mongoose = require('mongoose');

var SportSchema = mongoose.Schema({
    name: String
})

mongoose.model('Sport', SportSchema);