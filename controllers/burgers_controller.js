var express = require("express");
var moment = require('moment');
var Models = require('../models');
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  Models.Burger.findAll({
    include: [{
      model: Models.Customer,
    }],
  }).then((results) => {
    var burgers = {
      burgers: results
    }
    // res.json(results);
    res.render('index', burgers);
  });
});


router.post("/", function(req, res) {
  console.log("Burger is: " + req.body.burgerName);
    Models.Burger.create({
    burger_name: req.body.burgerName,
  }).then(function(results) {
    console.log(results);
    res.redirect('/');
  }).catch(function(err){
    console.log("This isn't a valid name!");
    res.send(err);
  });
})

router.post("/:id", function(req, res) {
  
  Models.Customer.create({
    name: req.body.customerName,
    burger_id: req.body.burgerId
  }).then(function() {
    Models.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.burgerId
        }
    }).then(function(results){
        res.redirect('/');
    });
  }).catch(function(err){
    console.log("This isn't a valid name!");
    res.send(err);
  });
})



// Export routes for server.js to use.
module.exports = router;