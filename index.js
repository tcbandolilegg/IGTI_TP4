const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tcbandolilegg:0TCSenha*@cluster0.6dkfe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});