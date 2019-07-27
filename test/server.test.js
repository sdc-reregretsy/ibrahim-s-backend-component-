const request = require('supertest');
const app = require('../Server/app.js');
const expect = require('expect.js');
const db = require('../DataBase/indexpg.js')
const assert = require('assert');

describe('GET /test', function() {
  it('GET a status respons 200 from server', async () => {
    const result = await request(app).get('/test');
    console.log(`expected: ${result.status} to equal: 200`)
   return assert.equal(result.status, 200);
  });
});


describe('GET /any id longer then 36', function() {
  it('GET respond with 404 for any id longer then 36', async()=> {
    const result = await request(app).get('/12sjsjjsjsjsjsjsjsjssjuendolajeejsufds');
    console.log(`expected: ${result.status} to equal: 404`)
   return assert.equal(result.status, 404);
  });
});
describe('GET /any id shorter then 36', function() {
  it('GET respond with 404 for any id shorter then 36', async()=> {
      const result = await request(app).get('/12sjsjjsjsjsjsjsjsjssjuendolajeejsu');
      console.log(`expected: ${result.status} to equal: 404`)
     return assert.equal(result.status, 404);
  });
});

describe('GET /', function() {
  it('GET responds 404 if there is not any given id', async()=> {
    const result = await request(app).get('/');
    console.log(`expected: ${result.status} to equal: 404`)
   return assert.equal(result.status, 404);
  });
});

describe('POST /test', function() {
  it('POST responds 404 there is no Post route', async()=> {
      const result = await request(app).post('/');
      console.log(`expected: ${result.status} to equal: 404`)
     return assert.equal(result.status, 404);
  });
});

describe('POST /with id', function() {
  it('POST responds 404 there is no Post route', async()=> {
      const result = await request(app).post('/1213d10e-b6b5-4d6d-af44-2b10d334ed52');
      console.log(`expected: ${result.status} to equal: 404`)
     return assert.equal(result.status, 404);      
  });
});

//DataBase Testing

describe('GET one Product', function() {
  it('fetches one product from the DataBase', async () => {
    let expected = "http://lorempixel.com/640/480/nature";
    const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2b10d334ed52')
    console.log(`expected: ${productImg.rows[0].img_url} to equal: ${expected}`)
   return assert.equal(productImg.rows[0].img_url, expected);
  });
});

describe('return empty OBJ', function() {
  it('return empty OBJ if id does not exist', async () => {
    let expected = {};
    const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2bd334ed')
    console.log(`expected: ${productImg} to equal: ${expected}`)
   return assert.equal(JSON.stringify(productImg), JSON.stringify(expected) );
  });
});

describe('GET / an image', function() {
  let expected ='http://lorempixel.com/640/480/nature'
  it('GET an image url from the dataBase using the server', async () => {
    const result = await request(app).get('/1213d10e-b6b5-4d6d-af44-2b10d334ed52');
    console.log(`expected: ${result.res.text} to equal: ${expected}`)
   return assert.equal(result.res.text, expected);
  });
});

describe('GET / can not git an image without id', function() {
  let expected ='http://lorempixel.com/640/480/nature'
  it('Can not GET an image url from the dataBase using the server without id', async () => {
    const result = await request(app).get('/');
    console.log(`expected: what ever is the respons is, should not be equal: http://lorempixel.com/640/480/nature`)
    return assert.notEqual(result.res.text, expected);
  });
});

describe('GET / can not git an image with wronge id', function() {
  let expected = 'http://lorempixel.com/640/480/nature'
  it('Can not GET an image url from the dataBase using the server with wronge id', async () => {
    const result = await request(app).get('/');
    console.log(`expected: what ever is the respons is, should not be equal: http://lorempixel.com/640/480/nature`)
    return assert.notEqual(result.res.text, expected);
    // .expect(result.res.text).toBe(expected)
  });
});

after(() => db.client.end());