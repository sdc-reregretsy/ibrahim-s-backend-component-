// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/retsy";
// function gitOneProduct(id){
//     MongoClient.connect(url, async function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("retsy");
//     return await dbo.collection("products").findOne({id:id})
//     db.close();
//   });
// }
// console.log(gitOneProduct('fffffb30-b1d9-4bf8-b496-283f93e7cecf'))
// module.exports={gitOneProduct}


// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/retsy";
// gitOneProduct =async function (id){
//   MongoClient.connect(url, async function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("retsy");
//     const result = await dbo.collection("products").findOne({id:id})
//      console.log(result)
//     return await result
//   });
// }

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/retsy';

async function gitOneProduct(id) {
    if(id.length !== 36 || typeof id !== 'string'){
      return 'the id is rongh'
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("retsy");

        let collection = db.collection('products');

        let query = { id: id }

        let res = await collection.findOne(query);

        return res.img_url

    } catch (err) {

        console.log(err);
    } finally {
        
        client.close();
    }
}


//console.log(gitOneProduct('fffffb30-b1d9-4bf8-b496-283f93e7cecf'))
 module.exports={gitOneProduct}

// const gitOneProduct= async (id) => (await (() => (
//   new Promise((resolve, reject) =>(clientConnect().then(client => {

//    //go ahead and make the query...
//     resolve= client.db('retsy').collection('products').findOne({id: id})
//     return resolve
//     }
//    )
//  )
// )
// .then((resolve)=>{console.log(resolve) }))));
// console.log(gitOneProduct('fffffb30-b1d9-4bf8-b496-283f93e7cecf'))
// module.exports={gitOneProduct}