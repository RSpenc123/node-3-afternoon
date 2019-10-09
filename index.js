require('dotenv').config();
const express = require('express');
const massive = require('massive');
const product_controller = require('./product_controller')
 const app = express();

 const {SERVER_PORT, CONNECTING_STRING} = process.env;
 
 massive( CONNECTING_STRING ).then(dbInstance => {
     app.set('db', dbInstance)
 })
 .catch(err => console.log(err))

 app.use(express.json());


 app.get('api/products', product_controller.getAll)
 app.get('api/product/:id', product_controller.getOne)
 app.post('api/products', product_controller.create)
 app.put('api/products/:id',product_controller.update)
 app.delete('api/products/:id', product_controller.delete)


 app.listen(SERVER_PORT, ()=> {
     console.log(`Server listening on port ${SERVER_PORT}.`);
 })