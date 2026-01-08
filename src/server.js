require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// servir carpeta public
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'API Ecobarrios operativa' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});