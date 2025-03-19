const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log("inside repository");
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : destroy");
      throw error;
    }
  }

  // findByPk - find by primary key. var query is applied on the primary key.
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : get");
      throw error;
    }
  }

  // findAll - fetches all entries from table, unless restricted by something like where clause.
  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : get");
      throw error;
    }
  }

  // data -> {col: value, ...}
  // data that we are passing should be an object.
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : get");
      throw error;
    }
  }
}

module.exports = CrudRepository;

/* We have various models in a single project. Each model will have a functionality CRUD.
   In a project like Movie booking system where we have various models like theatre model, movie model, user model.
   For every model we should have Create, Read, Update, Delete functions.
   So, CrudRepository is a generic model which can do CRUD operations on a basic level, avoiding to write crud functions again and again for every model.
*/
