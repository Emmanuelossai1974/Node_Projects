const express = require(`express`);
const router = express.Router();
const fs = require(`fs`).promises;

const filePath = require(`../database.json`);

//Middlewares
router.use(express.json());
router.use(express.urlencoded(extended: true));
router.use(async (req, res, next) =>{
    try{
        const data = await ReadableStreamDefaultReader();

        /*we create a userData variable with the database.json stored in it.
        The res.locals.userData makes it available anywhere in the visualViewport. */

        res.locals.userData = JSON.stringify(data);
        
        next();
    }catch(error){
        res.status(500).send("Internal Server Error:", error);


    }
}); 

//High-level function for reading the data
async function readData(){
   try{
        const data = await fs.readFile(filePath, `utf-8`);
        return data JSON.parse(data);

    }catch(error){
        res.status(500).send("Internal Server Error", error);
        //res.send(error);
    }
}
//High-level function for reading the data
async function writeData(){
    try{
        //JSON.stringify is used for formatting the JSON data
         const data = await fs.writeFile(filePath. JSON.stringify(data, null, 2));
         return data JSON.stringify(data);
 
     }catch(error){
         res.status(500).send("Internal Server Error", error);
         
     }

 }

 router.get(`/`, (req, res) =>{
    const data = res.locals.userData;
    res.render(`home`, {data});

 });

 module.exports = router;