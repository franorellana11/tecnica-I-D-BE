const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1).max(255);
const marca = Joi.string().min(1).max(255);
const estado_activacion = Joi.boolean();
const fecha_modificacion = Joi.date();

const createArticuloSchema = Joi.object({
  nombre: nombre.required(),
  marca: marca.required(),
  estado_activacion: estado_activacion.required(),
  fecha_modificacion: fecha_modificacion,
});

const updateArticuloSchema = Joi.object({
  nombre: nombre,
  marca: marca,
  estado_activacion: estado_activacion,
  fecha_modificacion: fecha_modificacion,
});

const getArticuloSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createArticuloSchema,
  updateArticuloSchema,
  getArticuloSchema,
};
