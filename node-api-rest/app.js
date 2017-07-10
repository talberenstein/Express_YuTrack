var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var router = express.Router();

router.get('/endpoints', function(req, res, next) {
   res.json([
     {
       id: '1',
      name: 'Supermercado',
      price: 150
    },
    {
      id: 2,
      name: 'Electricidad',
      price: 250
    }
  ]
   );
});

router.post('/notes', function(req, res, next){
  var id = req.body.id;
  var name = req.body.name;
  var price = req.body.price;

  res.send(id);
})

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
