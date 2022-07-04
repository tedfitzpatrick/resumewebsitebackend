import express from 'express';
// import bodyParser from 'body-parser'; // old, express now bundles parsers

// import { MongoClient } from 'mongodb';
import { initDBconnection } from './db';
import routesAPI from './routes';

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8080;
}


const app = express();

// "middleware" body parser must be registered to handle POST body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// hello
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// routes

routesAPI.forEach(route => {
  app[route.method](route.path, route.handler);
}); 

// user collection
// app.get('/api/user', async (req, res) => {
  
//   try {
//   const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//   const db = mongoclient.db('resumewebsitedb');
//   const user = await db.collection('user').findOne({});
//   res.status(200).json(user);
//   mongoclient.close();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });

// ted collection
// app.get('/api/ted', async (req, res) => {
  
//   try {
//   const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//   const db = mongoclient.db('resumewebsitedb');
//   const ted = await db.collection('ted').findOne({});
//   res.status(200).json(ted);
//   mongoclient.close();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });

// experiences collection
// app.get('/api/experiences', async (req, res) => {
  
//   try {
//   const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//   const db = mongoclient.db('resumewebsitedb');
//   const experiences = await db.collection('experiences').find({}).toArray();
//   res.status(200).json(experiences);
//   mongoclient.close();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });

// educations collection
// app.get('/api/educations', async (req, res) => {
  
//   try {
//   const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//   const db = mongoclient.db('resumewebsitedb');
//   const educations = await db.collection('educations').findOne({});
//   res.status(200).json(educations);
//   mongoclient.close();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });

// about collection
// app.get('/api/about', async (req, res) => {
  
//   try {
//   const mongoclient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//   const db = mongoclient.db('resumewebsitedb');
//   const about = await db.collection('about').findOne({});
//   res.status(200).json(about);
//   mongoclient.close();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }

// });

initDBconnection()
  .then(() => {
   
    app.listen(PORT, () => {
      console.log(`Express app listening on port ${PORT}`);
    });

  });

