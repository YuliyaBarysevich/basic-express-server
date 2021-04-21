'use strict'

const { server } = require('../src/server.js');
const supertest = require('supertest')
const mockRequest = supertest(server);


describe('WEB SERVER:', () => {

  it('should respond with a 404 on not found', async() => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404)
    });
  })

  it('should respond properly to a GET: /', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world!')
  })

  // it('should respond properly to a GET: /person', async() => {
  //   const response = await mockRequest.get('/person');
  //   expect(response.status).toBe(200);
  //   // expect(response.text).toBe()
  // })


})