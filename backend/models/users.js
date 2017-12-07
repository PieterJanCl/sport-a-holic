var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    userpasswd: String,
})

mongoose.model('User', UserSchema);