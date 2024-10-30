# Proyecto CRUD de Artículos

Este proyecto es una API RESTful para la gestión de artículos en una tienda. Permite crear, leer, actualizar y eliminar artículos, así como manejar la base de datos utilizando PostgreSQL y Sequelize.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js.
- **Docker**: Para contenerizar la aplicación y la base de datos.
- **pgAdmin**: Herramienta para gestionar bases de datos PostgreSQL.

## Requisitos

- Node.js y npm instalados en tu máquina.
- Docker y Docker Compose instalados.

## Instrucciones de Ejecución

1. **Subir contenedores**:  
   ```bash
   docker-compose up

2. **Iniciar servidor de desarrollo**:  
   ```bash
   npm run dev

3. **Conectar a la base de datos PostgreSQL**:  
   ```bash
   psql -h DB_HOST -p DB_PORT -U DB_USER -d DB_NAME
