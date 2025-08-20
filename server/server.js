const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Importa o mongoose
require('dotenv').config(); // Carrega as variáveis de ambiente

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso");
});

app.get('/', (req, res) => {
  res.send('API do Taskfy está no ar!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
