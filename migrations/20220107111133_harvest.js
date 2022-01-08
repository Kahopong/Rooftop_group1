
exports.up = function(knex) {
    knex.schema.createTable("", (table)=>{
      table.increments("")
      table.string("Crop_Type")
      table.integer("Weight")
      table.string("Status")
    })
};

exports.down = function(knex) {
    knex.schema.dropTable("")
};
