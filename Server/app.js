const express = require('express');
const app = express();
const cors =require('cors')
const db = require('../DataBase/indexpg.js')
const mdb = require('../DataBase/indexMongo.js')
app.use(express.json());
app.use(cors())
app.use(express.static('client/dist'))
app.use('/items/:id', express.static('client/dist'))
app.get(`/pg/:id`, async (req, res) =>{
    console.log('you made it')
    try{
        if(req.params.id ==='test'){
            res.status(200).send('you did it')
            res.end()
        }else if(req.params.id.length ===36){
            const productImg =await db.gitProductImage(req.params.id)
            res.send(productImg.rows[0].img_url)
            res.end()
        }else{
            res.status(404).send('Not found');
            res.end()
        }  
    }catch (error){
        res.status(404).send('Not found');
        res.end()
    }
  })
  app.get(`/mongo/:id`, async (req, res) =>{
    try{
        if(req.params.id ==='test'){
            res.status(200).send('you did it')
            res.end()
        }else if(req.params.id.length ===36){
            const productImg =await mdb.gitOneProduct(req.params.id)
            res.send(productImg)
            res.end()
        }else{
            res.status(404).send('Not found');
            res.end()
        }  
    }catch (error){
        res.status(404).send('Not found');
        res.end()
    }
  })
module.exports = app;