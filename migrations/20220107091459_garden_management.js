//  S6 - gardenMan
exports.up = function(knex) {
    return knex.schema.createTable("garden_management", (table) => {
        table.increments();
        table.string("s6q1");
        table.string("s6q1_remarks");
        table.string("s6q2_num");
        table.string("s6q3");
        table.string("s6q3_item");
        table.string("s6q3_quantity");
        table.string("s6q4");
        table.string("s6q4_remarks");

        table.timestamps(false, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable("garden_management");
};