const express = require('express');
const app = express();
const PORT = 3000;
const routerApi = require('../src/routes/index_routes');
const {
  logErrors,
  errorHandler,
} = require('../src/middlewares/error.handler');

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
