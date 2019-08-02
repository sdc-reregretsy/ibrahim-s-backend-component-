// const request = require('supertest');
// const expect = require('expect.js');
// const mdb = require('../DataBase/indexMongo.js')
// const assert = require('assert');

// describe('GET one Product', function() {
//     it('fetches one product from the MongoDataBase', async () => {
//       let expected = "http://lorempixel.com/640/480/nature";
//       const productImg = await mdb.gitOneProduct('1213d10e-b6b5-4d6d-af44-2b10d334ed52')
//       console.log(`expected: ${productImg} to equal: ${expected}`)
//      return assert.equal(await productImg, expected);
//     });
//   });
  
//   describe('GET / can not git an image with wronge id', function() {
//     it('Can not GET an image url from the MongodataBase using the server with wronge id', async () => {
//       let expected = "http://lorempixel.com/640/480/nature";
//       const productImg = await mdb.gitOneProduct('1213d10e-b6b5-4d6d-af44-2b10d334ed54rgrgergergergergrgeg42')
//       console.log(`expected: ${productImg} to not equal: ${expected}`)
//      return assert.notEqual(await productImg, expected);
//     });
//   });