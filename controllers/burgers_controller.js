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
    Models.Burger.create({
    burger_name: req.body.name,
  }).then(function(results) {
    //   res.json(results);
    console.log(results);
    res.redirect('/');
  });
})

router.post("/:id", function(req, res) {
     Models.Customer.create({
    name: req.body.customer,
    burger_id: req.params.id
  }).then(function() {
    Models.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(results){
        res.redirect('/');
    })
  });
})



// Export routes for server.js to use.
module.exports = router;