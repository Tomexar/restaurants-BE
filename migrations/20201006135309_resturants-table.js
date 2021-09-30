
exports.up = function(knex) {
  return knex.schema
    .createTable('restaurants', tbl =>{
        tbl.increments()
        tbl.string('name', 128).notNullable().unique()
        tbl.string('location').notNullable()
        tbl.time('hh_start').notNullable()
        tbl.time('hh_end').notNullable()
        tbl.string('days').notNullable()
        tbl.string('phone')
        tbl.string('img').notNullable()
        tbl.string('website').notNullable()
        tbl.string('instagram').notNullable()
        tbl.timestamps(true,true)
  })
    .createTable('menu', tbl =>{
        tbl.increments()
        tbl.string('item').notNullable().index()
        tbl.string('price').notNullable()
        tbl.string('type').notNullable()
        tbl.text('description')
        tbl.timestamps(true,true)

        tbl.integer('restaurant_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('restaurants')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu').dropTableIfExists('restaurants')
};
