
var user = mongoose.model('User', userSchema);

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    date_joined: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', userSchema);
