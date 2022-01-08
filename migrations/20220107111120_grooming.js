
exports.up = function(knex) {
  knex.schema.createTable("", (table)=>{
    table.increments("")
    table.string("Pest_Control");
    table.string("Pruning")
    table.string("Weeding")
  })
};

exports.down = function(knex) {
  knex.schema.dropTable("")
};
