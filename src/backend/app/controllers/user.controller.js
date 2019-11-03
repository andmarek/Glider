const user = require('../models/user.model.js');

exports.create = (req, res) => {
    if (!req.body.content) {
        console.log(req.body);
        // If we have an error posting where you shouldn't be able to
        //implement a check
    }

    let user = new User({
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
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findOne = (req, res) => {
    user.findById(req.params.userId).then(
        user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);

            console.log(user);
            console.log("past user");
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id" + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id" + req.params.userId
        });
    });
};

exports.update = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "User cannot be empty"
        });
    }

    user.findByIdAndUpdate(req.params.userId, {
        username: req.body.username,
        password: req.body.password
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
            message: "Error updating user with id " + req.params.userId
        });
    })
};

exports.delete = (req, res) => {
    user.findByIdAndRemove(req.params.userId)
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
