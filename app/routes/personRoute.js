var Details = require('../models/personModel');
var user = require('../controllers/personController');


module.exports = function(app) {
    var express = require('express');

    var router = express.Router();

    app.use('/api', router);

    router.use(function(req, res, next) {
        console.log("Waiting for something to happen");
        next();

    });

    router.route('/details').
    post(user.postRoute).
    get(user.getRoute);

    router.route('/details/:person_id').
        get(user.getRouteById).
    put(user.updateRouteById).
    delete(user.deleteRouteById);
};
