//  S1 - farmlog info
exports.up = function (knex) {
  return knex.schema.createTable("farmlog", (table) => {
    table.increments();
    table.string("s1q1");
    table.string("s1q2");
    table.string("s1q3");
    table.string("s1q4");
    table.string("s1q5");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("farmlog");
};
