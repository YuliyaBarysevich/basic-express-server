'use strict'

const { server } = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server)

describe('validator middleware', () => {

  it('should respond with a 500 if no name in the query string', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500)
    })
  })
  
  it('given an name in the query string, the output object is correct', async() => {
    const response = await mockRequest.get('/person?name=Yuliya')
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Yuliya')
  });

})