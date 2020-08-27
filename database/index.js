const Table = require('./table');

class Database {
  hotels = new Table('name');
  rooms = new Table('hotel_id', 'price', 'capacity');
  bookings = new Table('room_id', 'name', 'paid');
}

module.exports = Database;
