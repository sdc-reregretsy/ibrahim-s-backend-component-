const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'ec2-18-219-202-42.us-east-2.compute.amazonaws.com',
    database: 'resty',
    password: '121203',
    port: 5432,
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

module.exports = { client, gitProductImage }
