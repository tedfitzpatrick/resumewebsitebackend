import { MongoClient } from "mongodb";

let client;

export const initDBconnection = async () => {
  client = await MongoClient.connect(
    "mongodb://localhost:27017",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
  );
//   console.log("DB connected");
}

export const getDBconnection = (dbName) => {
  const db = client.db(dbName);
  return db;
}
