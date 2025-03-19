const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;

/* Simple crud to add, remove, update, read a plane.
   Parent class is CrudRepository, it expects a model.
   Using super keyword, we can call the constructor of your parent class and there we can pass our model.
*/
