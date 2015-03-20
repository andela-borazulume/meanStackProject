'use Strict';

var mongoose = require('mongoose');
var Details = require('../models/personModel');

exports.postRoute = function(req, res) {
  var personal = new Details();
  personal.firstName = req.body.firstName;
  personal.lastName = req.body.lastName;
  personal.email = req.body.email;
  personal.gender = req.body.gender;
  personal.phoneNumber = req.body.phoneNumber;
  personal.password = req.body.password;
  personal.userName = req.body.username;
  personal.dateOfBirth = req.body.dateOfBirth;

  personal.save(function(err) {
    if (err) {
        res.send(err);
    } else {
      res.json({
          message: "It has been created"
      });
    }

  });
};

exports.getRoute = function(req, res) {
  Details.find(function(err, data) {
    if (err) {
        res.send(err);
    } else {
        res.json(data);
    }
  });

};

exports.getRouteById = function(req, res) {
  Details.findById(req.params.person_id, function(err, data) {
    console.log(data);
    if (err) {
      res.send(err);

    } else {
      res.json(data);
    }

  });

};

exports.updateRouteById = function(req, res) {
  Details.findById(req.params.person_id, function(err, data) {
    var personal = new Details();

    if (err) {
        res.send(err);

    } else {
      console.log(req.body);
      data.firstName = req.body.firstName;
      data.lastName = req.body.lastName;
      data.email = req.body.email;
      data.save(function(err) {
        if (err) {
            res.send(err);

        } else {
            res.json({
                message: "It has been updated"
            });
        }

      });
    }
  });
};

exports.deleteRouteById = function(req, res) {
  Details.remove({
  _id: req.params.person_id
  }, function(err, data) {
    if (err) {
        res.send(err);

    } else {
        res.json({
            message: "It has been deleted"
        });
    }

  });


};