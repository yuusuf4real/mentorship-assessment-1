const Model = require('./model');

class Hotel extends Model {
  id = Null;
  name = Null;

  static create(record) {
    // Requirements:
    //   - The record argument will always be a object representing a database record
    //   - Assign values from the record object to the corresponding model attributes


    const instance = new Hotel();

    // Add your implementation here ...
    this.id      = record;
    this.name    = record;

    return instance;
  }
}

module.exports = Hotel;
