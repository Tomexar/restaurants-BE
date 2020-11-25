
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: 'The Med', location:'Pearl Street', hh_start: '6:00', hh_end: '7:00' , phone: '303 555 555'},
        {id: 2, name: 't/aco', location:'Pearl Street', hh_start: '6:00', hh_end: '7:00' , phone: '303 555 555'}

      ]);
    });
};
