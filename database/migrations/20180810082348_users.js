exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments('id');
    users.string('name', 255)
    .notNullable();

    users
      .string('email', 255)
      .notNullable()
      .unique();
    users.string('password', 255)
    .notNullable();
    users.string('state', 255)
    .notNullable();
  })
  .createTable('device', tbl => {
    tbl.increments();
    tbl.string('device',255)
      .notNullable();
    tbl.string('hours')
    .notNullable();
    tbl.string('days', 255)
    .notNullable();
    tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('device').dropTableIfExists('users');
};
