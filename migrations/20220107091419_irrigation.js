//  S3 - irrigation
exports.up = function (knex) {
  knex.schema.createTable("irrigation", (table) => {
    table.increments();
    table.integer("farmlog_id");
    table.foreign("farmlog_id").references("farmlog.id");
    table.string("s3q1");
    table.string("s3q2");
    table.string("s3q3");
    table.timestamps(false, true);
  });
};
exports.down = function (knex) {
  knex.schema.dropTable("irrigation");
};
