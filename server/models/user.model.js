const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }},
  { timestamps: true } // Adiciona timestamps para createdAt e updatedAt automaticamente
);
const User = mongoose.model('User', userSchema);

module.exports = User;
