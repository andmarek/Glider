const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String
   /* date_joined: {
        type: Date,
        default: Date.now
    }*/
});

//var user = mongoose.model('User', userSchema);

module.exports = mongoose.model('users', userSchema);
