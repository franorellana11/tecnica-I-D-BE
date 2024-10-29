const express = require('express');
const app = express();
const PORT = 3000;
const routerApi = require('../src/routes/index_routes');

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
