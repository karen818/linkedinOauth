
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('linkedin_id')
    table.string('first-name');
    table.string('last-name');
    table.string('email-address');
    table.string('headline');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};


'id', 'first-name', 'last-name', 'email-address', 'headline'
