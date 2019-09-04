const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get ("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log(firstName,lastName,email);
})


app.listen(3000,function() {
    console.log("Server running at port 3000");
});