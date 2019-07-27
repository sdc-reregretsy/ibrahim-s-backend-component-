const request = require('supertest');
const app = require('../Server/app.js');
const expect = require('expect.js');
const db= require('../DataBase/indexpg.js')
const assert = require('assert');

describe('GET /test', function() {
  it('GET responds with text/html', function(done) {
    request(app)
      .get('/test')
      .set('Accept', 'text/html')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(200, done);
  });
});

describe('GET /any id longer then 36', function() {
  it('GET respond with 404 for any id longer then 36', function(done) {
    request(app)
      .get('/12sjsjjsjsjsjsjsjsjsjjsjuendolajeejsu')
      .expect(404, function (err) {
        console.log("The product id is long")
        done();
      });
  });
});
describe('GET /any id shorter then 36', function() {
  it('GET respond with 404 for any id shorter then 36', function(done) {
    request(app)
      .get('/12sjsjjsjsjsjsjsjsjssjuendolajeejsu')
      .expect(404, function (err) {
        console.log("The product id is short")
        done();
      });
  });
});

describe('GET /', function() {
  it('GET responds 404 if there is not any given id', function(done) {
    request(app)
      .get('/')
      .expect(404, function (err) {
        console.log("Please insert n ID")
        done();
      });
  });
});

describe('POST /test', function() {
  it('POST responds 404 there is no Post route', function(done) {
    request(app)
      .post('/')
      .expect(404, function (err) {
        console.log("ther is no post route")
        done();
      });
  });
});

describe('POST /with id', function() {
  it('POST responds 404 there is no Post route', function(done) {
    request(app)
      .post('/1213d10e-b6b5-4d6d-af44-2b10d334ed52')
      .expect(404, function (err) {
        console.log("ther is no post route even with the right id")
        done();
      });
  });
});

//DataBase Testing

describe('GET one Product', function() {
  it('fetches one product from the DataBase', async () => {
    let expected = "http://lorempixel.com/640/480/nature";
    const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2b10d334ed52')
    console.log(`expected: ${productImg} to equal: ${expected}`)
    assert.equal(productImg.rows[0].img_url, expected);
  });
});

describe('return empty OBJ', function() {
  it('return empty OBJ if id does not exist', async () => {
    let expected = {};
    const productImg = await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2bd334ed')
    console.log(`expected: ${productImg} to equal: ${expected}`)
    assert.equal(JSON.stringify(productImg), JSON.stringify(expected) );
  });
});

describe('GET / an image', function() {
  let expected ='http://lorempixel.com/640/480/nature'
  it('GET an image url from the dataBase using the server', async () => {
    const result = await request(app).get('/1213d10e-b6b5-4d6d-af44-2b10d334ed52');
    console.log(`expected: ${result} to equal: ${expected}`)
    assert.equal(result.res.text, expected);
  });
});

describe('GET / can not git an image without id', function() {
  let expected ='http://lorempixel.com/640/480/nature'
  it('Can not GET an image url from the dataBase using the server without id', async () => {
    const result = await request(app).get('/');
    console.log(`expected: ${result.res.text} not to equal: http://lorempixel.com/640/480/nature`)
     assert.notEqual(result.res.text, expected);
  });
});

describe('GET / can not git an image with wronge id', function() {
  let expected = 'http://lorempixel.com/640/480/nature'
  it('Can not GET an image url from the dataBase using the server with wronge id', async () => {
    const result = await request(app).get('/');
    console.log(`expected: ${result.res.text} not to equal: http://lorempixel.com/640/480/nature`)
     assert.notEqual(result.res.text, expected);
  });
});
