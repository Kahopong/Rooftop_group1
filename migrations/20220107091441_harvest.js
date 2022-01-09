//  S5 - harvest
exports.up = function (knex) {
  knex.schema.createTable("harvest", (table) => {
    table.increments();
    table.integer("farmlog_id");
    table.foreign("farmlog_id").references("farmlog.id");
    table.string("s5q1");
    table.string("s5q2");
    table.string("s5q3");
    table.timestamps(false, true);
  });
};
exports.down = function (knex) {
  knex.schema.dropTable("harvest");
};
