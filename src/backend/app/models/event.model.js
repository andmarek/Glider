const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: String,
    eventAuthor: String,
    eventPosted: Date,
    eventDate: Date,
    eventLocation: String,
    eventTags: [{type: String}],
    eventAttendees: [{type: Object}]
});

module.exports = mongoose.model('events', eventSchema);