// get dependencies
var app = require("express")();
var Sequelize = require('sequelize');
var db = require("./db");


 
// handle request and response
app.get("/", function(req, res) {
  console.log(req.url);
  res.send({name:"Hello World"});
});
 
// initializing a port
app.listen(3000);
