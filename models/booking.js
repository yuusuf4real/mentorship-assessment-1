const Room = require('./room');
const Model = require('./model');

class Booking extends Model {
  id = None;
  room_id = None;
  name = None;
  paid = None;


  static create(record) {
    // Requirements:
    //    - The record argument will always be a object representing a database record
    //    - Assign values from the record object to the corresponding model attributes

    const instance = new Booking();

    // Add your implementation here ...

    return instance;
  }

  room(db) {
    //  Requirements:
    //    - Select rooms from the database that has the room_id set on this model as self.room_id
    //    - Return None if query results is empty
    //    - Otherwise,
    //    - Return a Room model instance by calling the model's create method with the first record in the query results

    // Remove the pass statement below and add your implementation there ...
  }
}

module.exports = Booking;
