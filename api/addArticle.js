// import { MongoClient } from "mongodb";
import { connectToDatabase } from './dbConnection.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, title, content, author, date, picture } = req.body;
    console.log('To jest w ImageUrl: ', picture);
    try {
      const database = await connectToDatabase();
      const articles = database.collection('posts');
      const result = await articles.insertOne({
        id,
        title,
        content,
        author,
        date,
        picture,
      });

      res.status(200).json({ message: 'Artykuł dodany pomyślnie', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: 'Nie udało się dodać artykułu' });
    } finally {
      null;
      // await client.close();n
    }
  } else {
    res.status(405).json({ error: 'Metoda nie jest dozwolona' });
  }
}
