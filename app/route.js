var Details = require('./models/person');


module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  app.use('/api', router);

  router.use(function(req, res, next) {
      console.log("Waiting for something to happen");
      next();
  });

  router.route('/details').
  post(function(req, res) {
    var personal = new Details();
    personal.firstName = req.body.firstName;
    personal.lastName = req.body.lastName;
    personal.email = req.body.email;
    personal.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "It has been created"
            });
        }

    });
  }).
  get(function(req, res) {
    Details.find(function(err, person) {
        if (err) {
            res.send(err);
        } else {
            res.json(person);
        }
    });

  });

  router.route('/details/:person_id').
  get(function(req, res) {
    // var personId = req.params.person_id;
    // console.log(personId);
    Details.findById(req.params.person_id, function(err, resp) {
        console.log(res);

        if (err) {
            res.send(err);

        } else {
            res.json(resp);
        }
    });
  });
              // get(function(req, res) {
              //     var personId = req.params.person_id;
              //     console.log(personId);
              //     Details.findById(personId, function(err,person){
              //         console.log(person);
              //         if (err) {
              //             res.send(err);

              //         } else {
              //             res.json(req.person);
              //         }

              //     });

              // }).
              // put(function(req, res) {
              //     console.log(req.params.person_id);
              //     Details.findById(req.params.person_id, function(err, person) {
              //         // var personal = new Details();

              //         if (err) {
              //             console.log('error');
              //             res.send(err);

              //         } else {
              //             console.log('heteer');
              //             // person.firstName = req.body.firstName;
              //             // person.lastName = req.body.lastName;
              //             // person.email = req.body.email;

              //             // console.log(person.firstName);

              //              // person.save(function(err) {
              //              //     if (err) {
              //              //         res.send(err);

              //              //     } else {
              //              //         res.json({
              //              //             message: "It has been updated"
              //              //         });
              //              //     }
              //              // });
              //         }
              //     });
              // });
              // delete(function(req, res) {
              //     Details.remove({
              //         _id: req.params.person_id
              //     }, function(err, data) {
              //         if (err) {
              //             res.send(err);

              //         } else {
              //             res.json({
              //                 message: "It has been deleted"
              //             });
              //         }


              //     });


              // });
          };
