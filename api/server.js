// Plik TYLKO do lokalnego TESTOWANIA - pobierania i zapisywania danych !!!
//-------------------------------------------------------------------------
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const port = 3000;
app.use(express.json());

//------------------------------------------
// OPEN CONNECTION TO MONGODB
const uri = process.env.MONGODB_URI;
// const uri =
//   "mongodb+srv://vercel-admin-user-6703a71951df322efc1f187a:FNGsib8AhXU4LJp8@cluster0.r4uz6i5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function connectToDatabase() {
  // if (!client.isConnected()) await client.connect();
  // return client.db("myFirstBase");
  try {
    await client.connect();
    console.log("Połączono z bazą danych MongoDB");
    return client.db("myFirstBase");
  } catch (error) {
    console.error("Błąd połączenia z bazą danych:", error);
    process.exit(1);
  }
}
//-------------------------------------------
// get posts from MongoDB
app.get("/api/getArticles", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const articles = database.collection("posts");
    // console.log(articles);
    const result = await articles.find().sort({ date: -1 }).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się pobrać artykułów" });
  }
});

// save new post to MongoDB
app.post("/api/addArticle", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const articles = database.collection("posts");
    const newArticle = req.body;
    const result = await articles.insertOne(newArticle);
    res.status(201).json({ message: "Artykuł dodany pomyślnie", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Nie udało się dodać artykułu", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
