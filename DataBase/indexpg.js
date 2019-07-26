const { Client } = require('pg')
const client = new Client({
    user: 'ibrahim',
    host: 'localhost',
    database: 'retsy',
    password: '121203',
  })
client.connect()
.then(() => console.log('Connected to db'))
.catch(console.error);
async function gitProductImage(id){
  if(id.length !== 36 || typeof id !== 'string'){
    return res ={};
  }else{
       const res = await client.query(`Select img_url from products where id ='${id}'`)
      //  console.log(res)
    return res
  }
 
}
module.exports={gitProductImage}
