const express = require('express');

const ArticulosService = require('./../services/articulos.service');

const router = express.Router();
const service = new ArticulosService();

router.get('/', async (req, res, next) => {
  try {
    const articulos = await service.find();
    res.json(articulos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const articulos = await service.findOne(id);
    res.json(articulos);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const nuevoArticulo = await service.create(body);
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const articulo = await service.update(id, body);
    res.json(articulo);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
