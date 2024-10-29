const { models } = require('../libs/sequelize');

class ArticulosService {
  constructor() {}
  async create(data) {
    const newArticulos = await models.Articulos.create(data);
    return newArticulos;
  }
  async find() {
    const rta = await models.Articulos.findAll();
    return rta;
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
    const rta = await articulo.update(changes);
    return rta;
  }

  async delete(id) {
    const articuloDelete = await models.Articulos.findByPk(id);
    await articuloDelete.destroy();
    return id;
  }
}
module.exports = ArticulosService;
