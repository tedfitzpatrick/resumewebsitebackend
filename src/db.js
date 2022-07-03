import { MongoClient } from "mongodb";

let client;

const initDBconnection = async () => {
  client = await MongoClient.connect(
    "mongodb://localhost:27017",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
  );
//   console.log("DB connected");
}

const getDBconnection = (dbName) => {
  const db = client.db(dbName);
  return db;
}
