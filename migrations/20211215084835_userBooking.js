exports.up = function(knex) {
    return knex.schema.createTable('user_booking', (table) => {
        table.increments();
        table.integer("users_id").unsigned();
        table.foreign("users_id").references('users.id');
        table.integer("course_id").unsigned();
        table.foreign("course_id").references('course.id');
        table.boolean('paid');
        table.timestamps(false, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_booking')
};