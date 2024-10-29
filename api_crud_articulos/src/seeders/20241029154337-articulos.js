'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articulos', [
      {
        nombre: 'Laptop Dell Inspiron',
        fecha_modificacion: new Date(),
        marca: 'Dell',
        estado_activacion: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Teclado Mecánico RGB',
        fecha_modificacion: new Date(),
        marca: 'Logitech',
        estado_activacion: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monitor UltraWide 34"',
        fecha_modificacion: new Date(),
        marca: 'LG',
        estado_activacion: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'SSD Samsung 970 EVO 1TB',
        fecha_modificacion: new Date(),
        marca: 'Samsung',
        estado_activacion: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articulos', null, {});
  }
};
