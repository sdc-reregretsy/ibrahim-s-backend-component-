const express = require('express');
const app = express();
const cors =require('cors')
const db = require('../DataBase/indexpg.js')
app.use(express.json());
app.use(cors())
app.get(`/:id`, async (req, res) =>{
    try{
        if(req.params.id ==='test'){
            res.status(200).send('you did it')
        }else if(req.params.id.length ===36){
            const productImg =await db.gitProductImage(req.params.id)
            res.send(productImg.rows[0].img_url)
        }else{
            res.status(404).send('Not found');
        }  
    }catch (error){
        res.status(404).send('Not found');
    }
  })
module.exports = app;