const Model = require('./model');

class Hotel extends Model {
  id = null;
  name = null;

  static create(record) {
    // Requirements:
    //   - The record argument will always be a object representing a database record
    //   - Assign values from the record object to the corresponding model attributes


    const instance = new Hotel;

    // Add your implementation here ...

    instance.id = record;
    instance.name = record;

    return instance;
  }
}

module.exports = Hotel;
