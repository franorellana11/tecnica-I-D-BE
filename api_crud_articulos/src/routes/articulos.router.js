const express = require('express');

const ArticulosService = require('./../services/articulos.service');
const {
  createArticuloSchema,
  updateArticuloSchema,
  getArticuloSchema,
} = require('./../schemas/articulos.schema');
const validatorHandler = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new ArticulosService();

/**
 * @swagger
 * /api/articulos:
 *   get:
 *     summary: Obtiene todos los articulos o filtrados por ID, nombre o estado de activación.
 *     description: Este endpoint GET permite filtrar por coincidencia del nombre, estado de actividad y búsqueda exacta.
 *     tags:
 *       - Articulos
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: ID del artículo a obtener
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Nombre del artículo a buscar
 *       - in: query
 *         name: estado_activacion
 *         schema:
 *           type: boolean
 *         description: Estado de activación del artículo
 *     responses:
 *       200:
 *         description: Lista de artículos
 *       404:
 *         description: Artículo no encontrado
 */

router.get('/', async (req, res, next) => {
  try {
    const { id, nombre, exact, estado_activacion } = req.query;
    const articulos = await service.find({
      id,
      nombre,
      exact,
      estado_activacion,
    });
    if (articulos.length === 0) {
      return res
        .status(404)
        .json({ message: 'No se encontraron artículos con esos parámetros.' });
    }
    res.json(articulos);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /api/articulos/{id}:
 *   get:
 *     summary: Obtiene un artículo específico
 *     description: Retorna un artículo basado en el ID proporcionado.
 *     tags:
 *       - Articulos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del artículo
 *     responses:
 *       200:
 *         description: Artículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 nombre:
 *                   type: string
 *                   example: "Nombre del artículo"
 *                 fecha_modificacion:
 *                   type: date
 *                   example: "2024-10-29T15:45:45.075Z"
 *                 estado_activacion:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error en el servidor
 */

router.get(
  '/:id',
  validatorHandler(getArticuloSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const articulos = await service.findOne(id);
      res.json(articulos);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @swagger
 * /api/articulos:
 *   post:
 *     summary: Crea un nuevo artículo
 *     description: Este endpoint permite crear un nuevo artículo.
 *     tags:
 *       - Articulos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Nombre del artículo"
 *               descripcion:
 *                 type: string
 *                 example: "Descripción detallada del artículo"
 *               marca:
 *                 type: string
 *                 example: "Marca del artículo"
 *               estado_activacion:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Artículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 nombre:
 *                   type: string
 *                   example: "Nombre del artículo"
 *                 fecha_modificacion:
 *                   type: date
 *                   example: "2024-10-29T15:45:45.075Z"
 *                 estado_activacion:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Error de validación en la solicitud
 *       500:
 *         description: Error en el servidor
 */
router.post(
  '/',
  validatorHandler(createArticuloSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoArticulo = await service.create(body);
      res.status(201).json(nuevoArticulo);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getArticuloSchema, 'params'),
  validatorHandler(updateArticuloSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const articulo = await service.update(id, body);
      res.json(articulo);
    } catch (error) {
      next(error);
    }
  }
);

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
