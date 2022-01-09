//  S2 - Planting
exports.up = function (knex) {
  knex.schema.createTable("planting", (table) => {
    table.increments();
    table.integer("farmlog_id");
    table.foreign("farmlog_id").references("farmlog.id");
    table.string("s2q1");
    table.string("s2q1_remarks");
    table.string("s2q2");
    table.string("s2q2_fertiliser");
    table.string("s2q2_method");
    table.string("s2q3");
    table.string("s2q3_quantity");
    table.string("s2q3_remarks");
    table.string("s2q4");
    table.string("s2q4_fertiliser");
    table.string("s2q4_usage");
    table.string("s2q4_remarks");
    table.string("s2q5");
    table.timestamps(false, true);
  });
};
exports.down = function (knex) {
  knex.schema.dropTable("planting");
};
