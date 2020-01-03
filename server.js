var express = require("express");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"))
var PORT = process.env.port ||5000;
useragent = require("express-useragent");
// #################################################
app.get("/",function(req,res){
    var isMobile =useragent.parse(req.headers["user-agent"]).isMobile;
    if(isMobile){
        res.render("mobile/home")
    }else{
        res.render("desktop/home")
    }
});
app.get("/profile",function(req,res){
    var isMobile =useragent.parse(req.headers["user-agent"]).isMobile;
    if(isMobile){
        res.render("mobile/profile")
    }else{
        res.render("desktop/profile")
    }
});
app.get("/feed",function(req,res){
    var isMobile =useragent.parse(req.headers["user-agent"]).isMobile;
    if(isMobile){
        res.render("mobile/profile")
    }else{
        res.render("desktop/feed")
    }
});
app.get("/complete",function(req,res){
    var isMobile =useragent.parse(req.headers["user-agent"]).isMobile;
    if(isMobile){
        res.render("mobile/profile")
    }else{
        res.render("desktop/complete-signup.ejs")
    }
});

// #################################################
app.listen(PORT,function(){console.log("Mo7draty.com has just been launched")})
