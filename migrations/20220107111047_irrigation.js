
exports.up = function(knex) {
  knex.schema.createTable("Irrigation", (table)=>{
    table.increments("");
    table.string("Irrigation_System");
    table.integer("Water_Usage");
  })
};

exports.down = function(knex) {
  knex.schema.dropTable("Irrigation")
};
