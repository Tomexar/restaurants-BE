
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {id: 1, item: 'pizza', price: '$5',description: 'a pizza', restaurant_id:1},
        {id:2, item:'pasta', price:"$7", description: 'pasta', restaurant_id:1},
        {id: 3, item: 'taco', price: '$5',description: 'a taco', restaurant_id:2},
        {id:4, item:'burrito', price:"$7",description: 'a burrito', restaurant_id:2}
      ]);
    });
};
