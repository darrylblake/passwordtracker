// get dependencies
var app = require("express")();
 
// handle request and response
app.get("/", function(req, res) {
  console.log(req.url);
  res.send({name:"Hello World"});
});
 
// initializing a port
app.listen(3000);
