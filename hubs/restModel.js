const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    find, 
    findMenu,
    findById, 
    insert,
    remove,
    addMenu, 
    getMenuById,
    removeMenu,
    findItemById, 
}

//finds all restaurants
function find() {
    return db('restaurants')
}

//finds all menu items
function findMenu(){
    return db ('menu')
}

//finds a specific restaurant
function findById(id){
    return db('restaurants')
        .where({ id })
        .first();
}

//adds a restaurant
function insert(restaurant){
    return db('restaurants')
        .insert(restaurant, 'id')
        .then(([id]) =>{
            return findById(id)
        })
}

//removes a restaurant
function remove(id){
    return db('restaurants')
        .where({ id })
        .del();   
}

//finds a specific item on a menu used in add menu to return object after add
function findItemById(id) {
    return db('menu')
    .where ({ id })
    .first()
}

//adds an item to a menu
async function addMenu(item, restaurant_id){
    const [id] = await db('menu')
        .where({ restaurant_id })
        .insert(item)
    return findItemById
}

//finds the menu of a specific restaurant used in getMenuById
function getRmenu(restaurant_id){
    return db('menu')
        .where({restaurant_id})
}

//find the restaurant with menu
async function getMenuById(id){
    let restaurant = await db('restaurants')
        .where({ id })
        .first()
    let menu = await getRmenu(id)
        return{...restaurant, menu}
}

//delete an item from a menu
function removeMenu(id){
    return db('menu')
    .where({ id })
    .del()
}