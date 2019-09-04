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

    var data = {
        members: [
            {
                email_address:email,
                status:"subscribed",
                merge_fields: {
                    FNAME:firstName,
                    LNAME:lastName,
                }
            }
        ]
    }

    var jsonData= JSON.stringify(data);


    
    request(options,function(error,response,body) {
        if(response.statusCode != 200) {
            res.sendFile(__dirname + "/failure.html");
        }else {
            res.sendFile(__dirname + "/success.html");
        }
    })
})


app.listen(3000,function() {
    console.log("Server running at port 3000");
});
