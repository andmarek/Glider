module.exports = (app) => {
    const events = require('../controllers/model.controller.js');

    app.post('/events', events.create);

    app.get('/events', events.findAll);

    app.get('/events/:eventId', events.findOne);

    app.put('/events/:eventId', events.update);

    app.delete('/user/:eventId', events.delete);
}