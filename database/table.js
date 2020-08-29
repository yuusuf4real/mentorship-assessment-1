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

    let recordId = '_id';
    let idGen = 0;
    this.cursor = idGen++;

    if(this.cursor <= 0 && this.cursor === this.cursor)
      this.cursor += 1;

    if(this.fields.length !== 0
       && typeof this.fields === 'object'){
        this.data[recordId] = idGen;

        this.fields.forEach(value => {
           let field = value;

        if(field == '_id' || field == 'name' || field == 'price' || field == 'capacity' || field ==
          'room_id' || field =='hotel_id' || field == 'paid')

        params.forEach(param => {
          if(param == 'undefined') throw new Error('No value found(undefined)')
          let feildValue = param;
          this.data[field] = feildValue;
        });
    })
   }

    return this.data;
  }

  select(...conditions) {
    // Requirements:
    //   - Filter and return records that has values matching those in the conditions argument
    //   - BUT ::::
    //   - Validate that conditions is a (1) dictionary (2) non-empty (3) Keys are in self.fields list
    //   - Manually or allow python to raise appropriate exceptions when there are errors
    //   - Return a list of dictionaries representing records that matched entires in the conditions argument

    // Add your implementation here ...
    let selectData = []
     if(this.fields.length !== 0
       && typeof this.fields === 'object' && Object.hasOwnProperty(this.fields)){

       this.fields.forEach(data => {
         conditions.forEach(condition => {
          if(data == condition)
            selectData.push(data);
          else
            throw new Error('No data match')
         });
       });
     }
    return selectData;
  }
}


module.exports = Table;
