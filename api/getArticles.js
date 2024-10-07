import { MongoClient } from "mongodb";

const uri = "mongodb+srv://inzmatys:CatsBlog@cluster0.r4uz6i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default async function getArticles(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db("myFirstBase");
    const articles = database.collection("posts");
    const result = await articles.find().sort({ date: -1 }).toArray();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Nie udało się pobrać artykułów" });
  } finally {
    await client.close();
  }
}
