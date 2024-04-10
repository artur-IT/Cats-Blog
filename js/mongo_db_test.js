import { MongoClient, ServerApiVersion } from "mongodb";

const url = "mongodb+srv://inzmatys:MyMongoDB.24@cluster0.r4uz6i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "myFirstBase";

// const options = {
//   useNewUrlParser: true,
// };
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect(url, (err, client) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Connected to MongoDB!");

      const myDB = client.db(dbName);
      // Przykładowe kolekcje i dokumenty
      // const users = [
      //   { name: "John", age: 28 },
      //   { name: "Jane", age: 31 },
      //   { name: "Bob", age: 24 },
      // ];

      // const products = [
      //   { name: "Table", price: 100 },
      //   { name: "Chair", price: 50 },
      //   { name: "Lamp", price: 30 },
      // ];

      // Dodaj sample dokumenty
      // db.collection("users").insertMany(users, (err, result) => {
      //   if (err) throw err;
      //   console.log(`Dodano ${result.insertedCount} użytkowników`);
      // });

      // myDB.collection("products").insertMany(products, (err, result) => {
      //   if (err) throw err;
      //   console.log(`Dodano ${result.insertedCount} produktów`);
      // });

      myDB
        .collection("animals")
        .find()
        .toArray(function (err, result) {
          if (err) throw err;
          else console.log(result);
          client.close();
        });

      // client.close();
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
