//  S3 - irrigation
exports.up = function(knex) {
    return knex.schema.createTable("irrigation", (table) => {
        table.increments();
        table.string("s3q1");
        table.string("s3q2");
        table.string("s3q3");
        table.timestamps(false, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable("irrigation");
};