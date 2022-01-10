//  S7 - other issues
exports.up = function(knex) {
    return knex.schema.createTable("other_issues", (table) => {
        table.increments();
        table.string("other_issues");
        table.timestamps(false, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("other_issues");
};