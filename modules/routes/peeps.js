var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// 27017 is default mongo port

mongoose.connect('localhost:/27017/meanie');

var peepsSchema = new mongoose.Schema({
    name: String,
    location: String
});

var peepsModel = mongoose.model('peepsModel', peepsSchema);

router.get('/', function (req, res) {
    // get and send back all the things
    peepsModel.find({}).then(function (data) {    // find { } = all. optional err code after find().
        res.send(data);
    });
});

router.post('/', function (req, res) { //changed app to router
    console.log('req.body.name: ' + req.body.name);
    // retrieved the req.body
    // putting it into an object to be saved in the db
    var recordToAdd = {
        name: req.body.name,
        location: req.body.location
    }
    // create new record
    var newRecord = peepsModel(recordToAdd);
    newRecord.save(function (err) {
        if (err){
            console.log('Peeps.js err: ', err);
        } else {
            res.sendStatus(200);
        }
    });       // save to database. OPTIONAL: callback funct within ().
});

//added export line
module.exports = router;