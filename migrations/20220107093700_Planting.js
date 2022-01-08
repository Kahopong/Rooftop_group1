
exports.up = function(knex) {
  knex.schema.createTable("Planting", (table)=>{
      table.increments();
      table.string("Special_Issues")
      table.string("Ploughing/Base_Dressing")
      table.string("Sowing")

  })
};

exports.down = function(knex) {
  knex.schema.dropTable("Planting")
};
