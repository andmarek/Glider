const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: String,
    eventAuthor: String,
    eventPosted: Date,
    eventDate: Date,
    eventTags: [{type: String}],
    eventAttendees: [{type: String}]
});

//var user = mongoose.model('User', userSchema);

module.exports = mongoose.model('events', eventSchema);