
//Import Express, Mongodb and File System
var express = require('express')
var app = express()
var fs = require('fs')
var MongoClient = require('mongodb').MongoClient;

//Opening a connection
var server = app.listen(8080, function(){
    console.log("server is running!")
})

//Loading Home Page
app.get('/', function(req,res){
    res.send("Hello World!")
})

//Loading Register View
app.get('/register', function(req,res){
    res.sendFile(__dirname + "/register.html")
})

//Submit user info and display
app.get('/process_get', function (req, res) {
    response = {
        first_name:req.query.firstName,
        last_name:req.query.lastName,
        username:req.query.userName,
        password:req.query.password,
        email:req.query.email
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

//Opening a connection to Mongodb Server
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(err) { return console.dir(err); }
    if(!err) { console.log("MongoDB server is connected!") }

    db.collection('users').save(req.firstName);
    collection.insert({name:req.query.firstName});

    db.close();
})




