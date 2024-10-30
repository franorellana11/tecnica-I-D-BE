const express = require('express');

const ArticulosService = require('./../services/articulos.service');

const router = express.Router();
const service = new ArticulosService();

router.get('/', async (req, res, next) => {
  try {
    const { id, nombre, exact, estado_activacion } = req.query;
    const articulos = await service.find({
      id,
      nombre,
      exact,
      estado_activacion,
    });
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

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'ID requerido' });
    }
    const articulo = await service.delete(id);
    res.status(200).json({ id: articulo.id, message: 'Articulo desactivado' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
