const Model = require('./model');
const Hotel = require('./hotel');

class Room extends Model {
  id = Null;
  hotel_id = Null;
  price = Null;
  capacity = Null;

  static create(record) {
    // Requirements:
    //   - The record argument will always be a dictionary representing a database record
    //   - Assign values from the record dictionary to the corresponding model attributes

    const instance = new Room();

    // Add your implementation here ...
    this.id       = record;
    this.hotel    = record;
    this.price    = recond;
    this.capicity = recond;

    return instance;
  }

  hotel(db) {
    // Requirements:
    //   - Select hotels from the database that has the hotel_id set on this model as self.hotel_id
    //   - Return None if query results is empty
    //   - Otherwise,
    //   - Return a Hotel model instance by calling the model's create method with the first record in the query results

    // Remove the pass statement below and add your implementation there ...
    if(db){
      return Room.create(this.room_id);
    } else{
      return none;
    }
  }
}

module.exports = Room;
