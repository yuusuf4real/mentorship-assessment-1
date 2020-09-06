const Model = require('./model');
const Hotel = require('./hotel');

class Room extends Model {
  id = null;
  hotel_id = null;
  price = null;
  capacity = null;

  static create(record) {
    // Requirements:
    //   - The record argument will always be a dictionary representing a database record
    //   - Assign values from the record dictionary to the corresponding model attributes

    const instance = new Room();

    // Add your implementation here ...
    instance.id       = record;
    instance.hotel_id = record;
    instance.price    = record;
    instance.capacity = record;

    return instance;
  }

  hotel(db) {
    // Requirements:
    //   - Select hotels from the database that has the hotel_id set on this model as self.hotel_id
    //   - Return None if query results is empty
    //   - Otherwise,
    //   - Return a Hotel model instance by calling the model's create method with the first record in the query results

    // Remove the pass statement below and add your implementation there ...

    const instance = new Hotel();

    instance.id = db;

    if(instance.id === null) return null;

    return Hotel.create(db)
  }
}

module.exports = Room;
