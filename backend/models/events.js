var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    sportName: String,
    date: String,
    uur: String,
    user: String
})

mongoose.model('Event', EventSchema);
