const User = require('../models/user.model.js');

exports.create = (req, res) => {
    if (!req.body.content) {

        console.log(req.body);
/*
        return res.status(400).send({
            message: "User content cannot be empty"
        });*/
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    console.log("yo " + user.username);

    user.save().then(
        data => {
            res.send(data);
        }
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while creating user."
        });
    });

};

exports.findAll = (req, res) => {
    user.find()
        .then(notes => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findOne = (req, res) => {
    User.findById(req.params.userId).then(
        user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);

        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id" + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id" + req.params.noteId
        });
    });
};

exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "User cannot be empty"
        });
    }

    User.findByIdAndUpdate(req.params.userId, {
        username: req.body.title,
        password: req.body.content
    }, {
        new: true
    }).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id" + req.params.userId
            });
        }
        k
        res.send(user);

    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.userId
        });
    })
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
