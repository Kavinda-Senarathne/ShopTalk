var expect = require('chai').expect;
var request= require('request');
var app= require('express');

it('Home page status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('User identified', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Signup', function(done) {
    request('http://localhost:3000/signup' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Signin', function(done) {
    request('http://localhost:3000/signin' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
// it('user registered', function(done) {
//     const params= {
  
//         "name": "Kavi Piyumal",
//         "email": "kavi@gmail.com",
//         "password":"1234567"
      
//      }
//     request(app)
//      .post('/api/users')
//      .send(params)
//      .expect('Content-Type',application/json)
//      .end((err, res) => {
//         res.body.status.should.equal(404);
//         done();
//     });

// });




