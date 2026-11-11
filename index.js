import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

const app = express();
const port = 8000;
const client = new MongoClient(process.env.MONGODB_URI);

try {
  const dataBase = client.db("hire-loop");
  const collection = dataBase.collection("users");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (err) {
  console.log(err);
}

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const dbConnect = connectToMongoDB()

//middlewire
app.use(express.json());
app.use(cors());





app.get("/", (req, res) => {
  res.send("Hello World!");
});
