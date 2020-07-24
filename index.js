var  express = require("express");
var app = express();
var port = 3000;

app.get("/hello", function(req,res){

    res.send("Thank You Microservice");
    res.end("Ending");
});

app.listen(port, function(){
    console.log("Listening");
});
