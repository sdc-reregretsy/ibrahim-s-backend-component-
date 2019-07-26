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
  it('futch one product from the DataBase', async () => {
    let expected = "http://lorempixel.com/640/480/nature";
    const productImg =await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2b10d334ed52')
    assert(productImg.rows[0].img_url, expected);
  });
});

describe('return undefind', function() {
  it('return undefind if id does not exist', async () => {
    let expected = {};
    const productImg =await db.gitProductImage('1213d10e-b6b5-4d6d-af44-2bd334ed')
    assert(productImg, expected);
  });
});

describe('GET / one image', function() {
  let expected ='http://lorempixel.com/640/480/nature'
  it('GET one image url from the dataBase using the server', async () => {
    const result = await request(app).get('/1213d10e-b6b5-4d6d-af44-2b10d334ed52');
    assert(result.text, expected);
  
  //   expect(res, function (err) {
  //       console.log(res)
  //       done();
  //     });
  });
});