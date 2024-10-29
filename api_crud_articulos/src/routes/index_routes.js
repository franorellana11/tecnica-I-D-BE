const express = require('express');
const articulos = require('../routes/articulos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/articulos', articulos);
}

module.exports = routerApi;
