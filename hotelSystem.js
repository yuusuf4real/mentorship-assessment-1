const { Room, Hotel, Booking } = require('./models');

class HotelSystem {
  constructor(db) {
    this.db = db;
  }

  registerHotel(name) {
    // Requirements:
    //   - Insert new hotel record into the database
    //   - Return a Hotel model instance by calling the model's create method with the query result

    // Add your implementation here ...
  }

  addRoom(hotelId, ...params) {
    // Requirements:
    //   - Insert new room record into the database
    //   - Return a Room model instance by calling the model's create method with the query result

    // Add your implementation here ...
  }

  getRoom(roomId) {
    // Requirements:
    //   - Select a room with the room_id argument from the database
    //   - Return None if query results is empty
    //   - Otherwise,
    //   - Return a Room model instance by calling the model's create method with the first record in the query results

    // Add your implementation here ...
  }

  bookRoom(roomId, ...params) {
    // Requirements:
    //   - Insert new booking record into the database
    //   - Return a Booking model by calling the model's create method instance with the query result

    // Add your implementation here ...
  }
}

module.exports = HotelSystem;
