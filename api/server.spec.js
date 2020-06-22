const server = require('./server.js');

const request = require('supertest');

describe('server', function() {
    describe('GET /', function(){
        it('should return 200 ok', function(){
        request(server).get('/').then(res => {
            expect(res.status).toBe(200);
        })
    })
    
    })
})