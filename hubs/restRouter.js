const router = require('express').Router();
const { json } = require('express');
const server = require('../api/server');
const Restaurants = require('./restModel')


//get all Restaurants
router.get('/', (req, res) =>{
    Restaurants.find()
        .then(restaurants =>{
            res.status(200).json(restaurants)
        }).catch (err =>{
            res.status(500).json({ message: 'error getting restaurants'
        })
    })
})

//get all Menu items
router.get('/menu', (req, res) =>{
    Restaurants.findMenu()
        .then(restaurants =>{
            res.status(200).json(restaurants)
        }).catch (err =>{
            res.status(500).json({ message: 'error getting restaurants'
        })
    })
})

//Restaurant by id
router.get('/:id', (req,res) =>{
    Restaurants.findById(req.params.id)
        .then(restaurant =>{
            if(restaurant){
                res.status(200).json(restaurant);
            } else {
                res.status(404)
                .json({message: 'Could not find Restaurant'})
            }            
        }).catch( err =>{
            res.status(500).json ({ message : 'error getting restaurants'})
        })
})

//find item by id
router.get('/item/:id', (req, res) =>{
    Restaurants.findItemById(req.params.id)
        .then(item =>{
            if(item){
                res.status(200).json(item)
            } else {
                res.status(404).json({ message: 'could not find that item'})
            }
        }).catch( err =>{
            res.status(500).json({ message:'could not find that item DB'})
        })
})

//add Restaurant
router.post ('/', (req,res) =>{
    Restaurants.insert(req.body)
        .then(restaurant =>{
            res.status(200).json(restaurant);
        })
        .catch(err =>{
            res.status(500).json ({ message : 'error adding restaurant'})
       });
})

//delete Restaurant
router.delete('/:id', (req,res) =>{
    Restaurants.remove(req.params.id)
        .then(restaurant =>{
            res.status(200).json(restaurant);
        })
        .catch(err =>{
            res.status(500).json({ message : 'error deleting restaurant'})  
        })
})

//delete an item from a menu
router.delete('/item/:id', (req,res) =>{
    Restaurants.removeMenu(req.params.id)
        .then(item =>{
            res.status(200).json(item)
        })
        .catch(err =>[
            res.status(500).json({message:'error deleting menu item'})
        ])
}) 

//add menu item to specific restaurant using id from url or provided 
router.post('/:id/menu', (req, res) =>{
    const { id } = req.params;
    const item = req.body;

    if(!item.restaurant_id){
        item['restaurant_id'] = parseInt(id,10)
    }

    Restaurants.findById(id)
    .then(restaurant =>{
        if(!restaurant){
            res.status(404).json({ message: 'invalid id'})
        }
        //check for notnull fields
        if(!item.item || !item.price){
            res.status(400).json({ message:'need item and price'})
        }
        Restaurants.addMenu(item, id)
        .then(item =>{
            if(item){
                res.status(200).json(item)
            }
        })
        .catch(err =>{
            res.status(500).json({ message: "failed to add item"})
        })
    })
    .catch(err =>{
        res.status(500).json ({message:'didnt work'})   
    })
})

//restaurant by id with menu
router.get('/:id/menu', (req,res)=>{
    Restaurants.getMenuById(req.params.id)
        .then(restaurant =>{
            // console.log(restaurant)
            if(restaurant){
                res.status(200).json(restaurant)
            } else {
                res.status(404).json({ message: 'could not find restaurant'})
            }
        })
        .catch(err =>[
            res.status(500).json({ message:"could not find restaurant DB"})
        ])
})



module.exports = router