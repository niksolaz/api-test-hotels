const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const nameDB = process.env.DB_NAME;

// Create database hotelsdatabase
MongoClient.connect(url + nameDB, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

// Create collections users and hotels
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(nameDB);
    dbo.collection("users").findOne({}, function(err, result) {
        if (err) throw err;
        if (result !== null) {
            console.log("users: ", result);
        } else {
            dbo.createCollection("users", function(err, res) {
                if (err) throw err;
                console.log("Collection users created!");
                db.close();
            });
        }
        console.log("users: ", result);
        db.close();
    });
    dbo.collection("hotels").findOne({}, function(err, result) {
        if (err) throw err;
        if (result !== null) {
            console.log("hotels: ", result);
        } else {
            dbo.createCollection("hotels", function(err, res) {
                if (err) throw err;
                console.log("Collection hotels created!");
                db.close();
            });
        }
        console.log("hotels: ", result);
        db.close();
    });
});

// Example insert object users or hotels
/**
 * 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var user = {};
    var hotel = {};
    dbo.collection("users").insertOne(user, function(err, res) {
        if (err) throw err;
        console.log("users document inserted");
        db.close();
    });
    dbo.collection("hotels").insertOne(hotel, function(err, res) {
        if (err) throw err;
        console.log("hotels document inserted");
        db.close();
    });
});
*/

// Example find users or hotels
/**
 * 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);

    dbo.collection("users").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    dbo.collection("hotels").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/