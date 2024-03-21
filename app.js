const express = require('express');
const ejs = require('ejs');
require(`dotenv`).config();
const app = express();
const port = 3000;


app.get('/', (req, res) =>{

    const id = req.query.id;
    const username = req.query.username;

    console.log(process.env)

    res.send(`User ID: ${id}. Username: ${username}`);
} );

app.get('/products/:id',(req, res) => {
    const productId = req.params.id;

    const products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
        {"id": 3, "name": "Product C"}
    ];

    const product = products.find(product => product.id === parseInt(productId));

    if(product){
        res.send(`product id ${product.id}. Name: ${product.name}`);
    } else {

        res.status(404).send(`product not found.`);
    }

    res.send(`Product id: ${product.id}. Name: ${product.name}`)
});






app.listen(port, () =>{console.log(`listening on port ${port}`);});