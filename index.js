/*Imports */
import express from 'express';
import mongoose from 'mongoose';

import { accountRouter } from "./routers/accountRoutes.js"


const app = express();

app.use(express.json());
app.use(accountRouter);

app.listen(3001, () => console.log('Servidor em execucao'));

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      // 'mongodb+srv://' +
      // process.env.USERDB +
      // ':' +
      // process.env.PWDDB +
      // '@bootcamp-smurc.mongodb.net/grades?retryWrites=true&w=majority',
      "mongodb+srv://tcbandolilegg:0Mongodb*@cluster0.6dkfe.gcp.mongodb.net/igti?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB ' + error);
  }
})();









// app.listen(process.env.PORT, () => console.log('Servidor em execucao'));


// // const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://tcbandolilegg:0TCSenha*@cluster0.6dkfe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });