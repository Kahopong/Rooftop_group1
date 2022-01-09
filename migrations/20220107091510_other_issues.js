//  S7 - other issues
exports.up = function (knex) {
  return knex.schema.createTable("other_issues", (table) => {
    table.increments();
    table.integer("farmlog_id");
    table.foreign("farmlog_id").references("farmlog.id");
    table.string("other-issues");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("other_issues");
};
