import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const port = 3000;

// const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://inzmatys:CatsBlog@cluster0.r4uz6i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.get("/api/getArticles", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("myFirstBase");
    const articles = database.collection("posts");
    const result = await articles.find().sort({ date: -1 }).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się pobrać artykułów" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
