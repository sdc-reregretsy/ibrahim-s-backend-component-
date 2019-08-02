// const request = require('supertest');
// const expect = require('expect.js');
// const db = require('../DataBase/indexpg.js')
// const assert = require('assert');


// describe('GET one Product', function() {
//     it('fetches one product from the DataBase', async () => {
//       let expected = "http://lorempixel.com/640/480/nature";
//       const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2b10d334ed52')
//       console.log(`expected: ${productImg.rows[0].img_url} to equal: ${expected}`)
//      return assert.equal(productImg.rows[0].img_url, expected);
//     });
//   });
  
  
//   describe('return empty OBJ', function() {
//     it('return empty OBJ if id does not exist', async () => {
//       let expected = {};
//       const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2bd334ed')
//       console.log(`expected: ${productImg} to equal: ${expected}`)
//      return assert.equal(JSON.stringify(productImg), JSON.stringify(expected) );
//     });
//   });
  
  