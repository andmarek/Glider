const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: String,
    eventAuthor: String,
    eventPosted: Date,
    eventDate: Date,
    eventTags: [{type: String}],
    eventAttendees: [{type: Object}]
});

module.exports = mongoose.model('events', eventSchema);