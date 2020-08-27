const Database = require('./database');
const HotelSystem = require('./hotelSystem');

const db = new Database();
const system = new HotelSystem(db);

const hotel = system.registerHotel('Julian Hotel');
console.log(hotel);
