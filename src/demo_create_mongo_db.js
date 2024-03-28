// import mongo from "mongodb";

// // var mongo = require("mongodb").MongoClient;
// mongo.MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// mongo.MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "myproject";

const options = {
  useNewUrlParser: true,
};

MongoClient.connect(url, options, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db(dbName);

  // Przykładowe kolekcje i dokumenty
  const users = [
    { name: "John", age: 28 },
    { name: "Jane", age: 31 },
    { name: "Bob", age: 24 },
  ];

  const products = [
    { name: "Table", price: 100 },
    { name: "Chair", price: 50 },
    { name: "Lamp", price: 30 },
  ];

  // Dodaj sample dokumenty
  db.collection("users").insertMany(users, (err, result) => {
    if (err) throw err;
    console.log(`Dodano ${result.insertedCount} użytkowników`);
  });

  db.collection("products").insertMany(products, (err, result) => {
    if (err) throw err;
    console.log(`Dodano ${result.insertedCount} produktów`);
  });

  client.close();
});
