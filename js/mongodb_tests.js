import { MongoClient } from "mongodb";

const url = "mongodb+srv://inzmatys:MyMongoDB.24@cluster0.r4uz6i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const dbName = "myFirstBase";

const client = new MongoClient(url);

// const myMongo = () => {
//   mongoose
//     .connect(url)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.error("Connection error", error));

//   const testSchema = new mongoose.Schema({
//     name: String,
//     testField: String,
//   });

//   const TestModel = mongoose.model("Test", testSchema);

//   const testData = new TestModel({
//     name: "Node-Mongo Connection Test",
//     testField: "It works!",
//   });

//   testData
//     .save()
//     .then((doc) => {
//       console.log("Test document saved:", doc);
//     })
//     .catch((error) => {
//       console.error("Error saving test document:", error);
//     });
//   //--------
// };

// myMongo();

let tableMovies = [];

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    // const query = {};
    const movie = await movies
      .find({})
      .limit(3)
      .toArray(function (err, result) {
        if (err) throw err;
        // tableMovies.push(result);
        // console.log(result);
      });
    tableMovies = movie;
    // console.log(tableMovies.length);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return tableMovies;
}
run().catch(console.dir);

export default run;

// console.log(tableMovies.length);
