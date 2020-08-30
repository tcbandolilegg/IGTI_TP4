import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({

  agencia: {
    type: Number,
    required: true,
  },

  conta: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  balance: {
    type: Number,
    required: true,
    //Valida se a nota inserida e' menor que zero
    // ou faz o if ou cloca o min
    // validate(balance) {
    //   if (balance < 0) throw new Error('Valor negativo para balance');
    // },
    min: 0,
  },
  // lastModified: {
  //   type: Date,
  //   default: Date.now,
  // },

});

const accountModel = mongoose.model('accounts', accountSchema, 'accounts');

export { accountModel };
