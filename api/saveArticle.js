import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, author, date, imageUrl } = req.body;

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      const database = client.db("catsBlog");
      const articles = database.collection("articles");

      const result = await articles.insertOne({
        title,
        content,
        author,
        date,
        imageUrl,
      });

      res.status(200).json({ message: "Artykuł dodany pomyślnie", id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: "Nie udało się dodać artykułu" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Metoda nie jest dozwolona" });
  }
}
