import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

// hello
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// user collection
app.get('/api/user', async (req, res) => {
  
  try {
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const user = await db.collection('user').findOne({});
  res.status(200).json(user);
  mongoclient.close();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// ted collection
app.get('/api/ted', async (req, res) => {
  
  try {
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const ted = await db.collection('ted').findOne({});
  res.status(200).json(ted);
  mongoclient.close();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// experiences collection
app.get('/api/experiences', async (req, res) => {
  
  try {
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const experiences = await db.collection('experiences').findOne({});
  res.status(200).json(experiences);
  mongoclient.close();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// educations collection
app.get('/api/educations', async (req, res) => {
  
  try {
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const educations = await db.collection('educations').findOne({});
  res.status(200).json(educations);
  mongoclient.close();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// about collection
app.get('/api/about', async (req, res) => {
  
  try {
  const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = mongoclient.db('resumewebsitedb');
  const about = await db.collection('about').findOne({});
  res.status(200).json(about);
  mongoclient.close();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});