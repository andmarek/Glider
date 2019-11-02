
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

const postSchema = mongoose.Schema({
    rating:
    author:
    reply_id:
    parent_comment_id:
});

const commentSchema = mongoose.Schema({
    _id: Object ID
    tags: Array
    comment_id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectID,
        String
    }
    rating: Double,
    planned_attendee: [ user: {
        username:,
        password:,
        date_joined: {
            type: Date,
            default: Date.now
        },
    }]

});

