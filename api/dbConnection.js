import { MongoClient } from "mongodb";

//------------------------------------------
// OPEN CONNECTION TO MONGODB
const uri =
  "mongodb+srv://vercel-admin-user-6703a71951df322efc1f187a:FNGsib8AhXU4LJp8@cluster0.r4uz6i5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db("myFirstBase");
}
//-------------------------------------------
// export { connectToDatabase };
