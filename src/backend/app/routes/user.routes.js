module.exports = (app) => {
    const users = require('../controllers/users.controller.js');

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.get('/users/:userId', users.findOne);

    app.put('/users/:userId', users.update);

    app.delete('/user/:userId', users.delete);
}
