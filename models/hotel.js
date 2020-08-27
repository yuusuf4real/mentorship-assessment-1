const Model = require('./model');

class Hotel extends Model {
  id = None;
  name = None;

  static create(record) {
    // Requirements:
    //   - The record argument will always be a object representing a database record
    //   - Assign values from the record object to the corresponding model attributes

    const instance = new Hotel();

    // Add your implementation here ...

    return instance;
  }
}

module.exports = Hotel;
