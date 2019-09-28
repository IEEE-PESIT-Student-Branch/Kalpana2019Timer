var express = require('express');
var app = express();

app.use(express.static("css"));
app.use(express.static("assets"));
app.set("view engine","ejs");

app.get('/',function(req,res){
    var now = new Date().getTime();
    var last = new Date("Sep 29, 2019 21:40:00").getTime();
    console.log(now);
    console.log(last);
    res.render("index",{now:now,last:last});
});

app.listen("8080",function(){
    console.log("Started");
});