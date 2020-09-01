class Table {
  constructor(...fields) {
    this.data = {};
    this.cursor = 0;
    this.fields = fields;
  }

  insert(...params) {
    // Requirements:
    //   - Add a record entry to the self.data dictionary
    //   - BUT ::::
    //   - Validate that params is a (1) dictionary (2) non-empty (3) Keys are in self.fields list
    //  - Ensure to generate a record id for the new record using the cursor attribute. Note: ids must always start from 1
    //   - Ensure to use generated id as key for insert and also inject into the actual record to be inserted with the key => _id
    //   - Manually or allow python to raise appropriate exceptions when there are errors
    //   - Return a dictionary representing the record that has just been successfully inserted

    // Add your implementation here ...
    Table.data(hotels, rooms, bookings);

    if(typeof(params) === {} && params.length !== {}) {
      
    }

    Table.cursor(hotels_id, rooms_id, bookings_id);

    return  {
      hotels_id: 1,
      rooms_id: 2,
      bookings_id: 5
    }
  }

  select(...conditions) {
    // Requirements:
    //   - Filter and return records that has values matching those in the conditions argument
    //   - BUT ::::
    //   - Validate that conditions is a (1) dictionary (2) non-empty (3) Keys are in self.fields list
    //   - Manually or allow python to raise appropriate exceptions when there are errors
    //   - Return a list of dictionaries representing records that matched entires in the conditions argument

    // Add your implementation here ...
  }
}

module.exports = Table;
