const express = require('express');
const app = express();
const PORT = 3000;
const routerApi = require('../src/routes/index_routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../src/middlewares/error.handler');
const setupSwagger = require('./swagger');

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(errorHandler)
app.use(boomErrorHandler);

setupSwagger(app);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Documentación en http://localhost:${PORT}/api-docs`);

});
