
exports.up = function(knex) {
  knex.schema.createTable("Users", (table)=>{
        table.increments();
        table.string("Farmer_name");

  }
  );
}
exports.down = function(knex) {
  knex.schema.dropTable("Users");
};
