const Event = require('../models/event.model.js');

//creates an event
exports.create = (req, res) => {
    if (!req.body.content) {
        console.log(req.body);
        // If we have an error posting where you shouldn't be able to
        //implement a check
    }

    let event = new Event({
        eventName: req.body.eventName,
        eventAuthor: req.body.eventAuthor,
        eventPosted: Date.now(),
        eventDate: req.body.eventDate,
        eventLocation: req.body.eventLocation,
        eventTags:req.body.eventTags,
        eventAttendees: req.body.eventAttendees
    });

    console.log("event title: " + event.eventName);
    console.log("event author: " + event.eventAuthor);
    console.log("event date: " + event.eventDate);
    console.log("event posted: " + event.eventPosted);
    console.log("event tags: " + event.eventTags);

    event.save().then(
        data => {
            res.send(data);
        }
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while creating event."
        });
    });

};

//finds every event in db
exports.findAll = (req, res) => {
    event.find()
        .then(events => {
            res.send(events);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving events."
            });
        });
};

// finds a specific event given an ID
exports.findOne = (req, res) => {
    event.findById(req.params.eventId).then(
        event => {
            if (!event) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send(event);

            console.log(event);
            console.log("past event");
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error retrieving event with id" + req.params.eventId
        });
    });
};

// updates the event title given an ID
/*
exports.updateEventTitle = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "event cannot be empty"
        });
    }
    event.findByIdAndUpdate(req.params.eventId, {
        title: req.body.title
    }, {
        new: true
    }).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        res.send(event);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    })
};

// updates the event description given an ID
exports.updateEventDescription = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "event cannot be empty"
        });
    }
    event.findByIdAndUpdate(req.params.eventId, {
        description: req.body.description
    }, {
        new: true
    }).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        res.send(event);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    }) 
};

// updates the event date
exports.updateEventDate = (req, res) => {
if (!req.body.content) {
        return res.status(400).send({
            message: "event cannot be empty"
        });
    }
    event.findByIdAndUpdate(req.params.eventId, {
        date: req.body.date
    }, {
        new: true
    }).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        res.send(event);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    })
};

exports.updateEventAttendees = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "event cannot be empty"
        });
    }
    event.findByIdAndUpdate(req.params.eventId, {
        $push: {"eventAttendees": req.body}
    }, {
        new: true
    }).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        res.send(event);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    })
};
*/
exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "event cannot be empty"
        });
    }
    event.findByIdAndUpdate(req.params.eventId, {
        eventName: req.body.eventName,
        eventAuthor: req.body.eventAuthor,
        eventDate: req.body.eventDate,
        eventLocation: req.body.eventLocation,
        // Update arrays
        $push: {"eventTags": req.body},
        $push: {"eventAttendees": req.body}
    }, {
        new: true
    }).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "event not found with id" + req.params.eventId
            });
        }
        res.send(event);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    })
};
exports.delete = (req, res) => {
    event.findByIdAndRemove(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        res.send({message: "event deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete event with id " + req.params.eventId
        });
    });
};