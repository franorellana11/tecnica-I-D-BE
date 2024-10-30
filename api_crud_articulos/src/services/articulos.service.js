const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class ArticulosService {
  constructor() {}

  async create(data) {
    const newArticulos = await models.Articulos.create(data);
    return newArticulos;
  }

  async find({ id, nombre, exact, estado_activacion }) {
    const where = {};
    if (id) {
      where.id = id;
    }

    if (nombre) {
      if (exact) {
        where.nombre = nombre;
      } else {
        where.nombre = { [Op.iLike]: `%${nombre}%` };
      }
    }
    if (estado_activacion !== undefined) {
      where.estado_activacion = estado_activacion === 'true';
    }

    const articulos = await models.Articulos.findAll({ where });
    return articulos;
  }

  async findOne(id) {
    const articuloId = await models.Articulos.findByPk(id);
    if (!articuloId) {
      throw new Error('Articulo no encontrado');
    }
    return articuloId;
  }

  async update(id, changes) {
    const articulo = await models.Articulos.findByPk(id);
    if (!articulo) {
      throw new Error('Articulo no encontrado');
    }
    const rta = await articulo.update(changes);
    return rta;
  }

  async delete(id) {
    const articuloDelete = await models.Articulos.findByPk(id);
    if (!articuloDelete) {
      throw new Error('Articulo no encontrado');
    }
    await articuloDelete.destroy();
    return id;
  }
}

module.exports = ArticulosService;
