import express from 'express';
import { accountModel } from '../models/accountModel.js';

const app = express();


//CREATE DOCUMENT
app.post('/account', async (req, res) => {
  const account = new accountModel(req.body);
  if (!account) {
    res.status(404).send('Documento nao encontrado');
  }
  try {
    await account.save();
    res.status("Documento adicionado com exito", account);
  } catch (err) {
    res.status(500).send(err);
  }
});

//RETRIVE
app.get('/account', async (req, res) => {
  const account = await accountModel.find({});

  try {
    res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE FOR ID
app.delete('/account/:id', async (req, res) => {
  try {
    const account = await accountModel.findOneAndDelete(req.params.id);

    if (!account) {
      res.status(404).send('Documento nao encontrado');
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});
//UPDATE FOR ID
app.patch('/account/:id', async (req, res) => {
  try {
    const account = await accountModel.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!account) {
      res.status(404).send('Documento nao encontrado');
    }
    res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as accountRouter };
