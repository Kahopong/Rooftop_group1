//  S4 - grooming
exports.up = function(knex) {
    return knex.schema.createTable("grooming", (table) => {
        table.increments();
        table.string("s4q1");
        table.string("s4q1_pest");
        table.string("s4q1_usage");
        table.string("s4q2");
        table.string("s4q3");
        table.string("s4q4");

        table.timestamps(false, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable("grooming");
};