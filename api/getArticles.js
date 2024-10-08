import { MongoClient } from "mongodb";

// const uri = "mongodb+srv://inzmatys:CatsBlog@cluster0.r4uz6i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGODB_URI;

export default async function getArticles(req, res) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("myFirstBase");
    const articles = database.collection("posts");
    const result = await articles.find().sort({ date: -1 }).toArray();
    res.status(200).json(result);
  } finally {
    await client.close();
  }
}
