//  S5 - harvest
exports.up = function(knex) {
    return knex.schema.createTable("harvest", (table) => {
        table.increments();
        table.string("s5q1");
        table.string("s5q2");
        table.string("s5q3");
        table.timestamps(false, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable("harvest");
};