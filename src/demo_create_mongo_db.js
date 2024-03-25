import mongo from "mongodb";

// var mongo = require("mongodb").MongoClient;
mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongo.MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
