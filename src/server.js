import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/user', (req, res) => {
  
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const user = await db.collection('user').findOne({});
  res.status(200).json(user);
  mongoclient.close();
  
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});