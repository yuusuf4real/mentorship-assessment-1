const Room = require('./room');
const Model = require('./model');

class Booking extends Model {
  id = null;
  room_id = null;
  name = null;
  paid = null;

  static create(record) {
    // Requirements:
    //    - The record argument will always be a object representing a database record
    //    - Assign values from the record object to the corresponding model attributes

    const instance = new Booking();

    // Add your implementation here ...
    instance.id      = record;
    instance.name    = record;
    instance.paid    = record;
    instance.room    = record;
    instance.room_id = record;

    return instance;
  }

  room(db) {
    //  Requirements:
    //    - Select rooms from the database that has the room_id set on this model as self.room_id
    //    - Return None if query results is empty
    //    - Otherwise,
    //    - Return a Room model instance by calling the model's create method with the first record in the query results

    // Remove the pass statement below and add your implementation there ...

    const instance = new Room();

    instance.hotel_id = db;

    if(instance.hotel_id === null) return null;

    return Room.create(db);
  }
}

module.exports = Booking;
