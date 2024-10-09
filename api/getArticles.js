// import { connectToDatabase } from "server";

//------------------------------------------
// OPEN CONNECTION TO MONGODB
// const uri = process.env.MONGODB_URI;
const uri =
  "mongodb+srv://vercel-admin-user-6703a71951df322efc1f187a:FNGsib8AhXU4LJp8@cluster0.r4uz6i5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default async function connectToDatabase() {
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

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const database = await connectToDatabase();
      const articles = database.collection("posts");
      const result = await articles.find().sort({ date: -1 }).toArray();
      console.log("wynik pobrania: ", result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Błąd podczas pobierania artykułów:", error);
      res.status(500).json({ error: "Nie udało się pobrać artykułów", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
