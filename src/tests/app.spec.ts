import supertest from 'supertest'
import app from '../app'

// create a request object with instance app

const request = supertest(app)

//describe Testing Endpoints

describe('Testing endpoint Responses', () => {
  //Testing / Endpoint

  it('test / EndPoint', async () => {
    const response = await request.get('/')
    expect(response.status).toEqual(200)
  })

  //Testing /anything Endpoint

  it('test /NotFound  EndPoint', async () => {
    const response = await request.get('/anything')
    expect(response.status).toEqual(404)
  })
})

  //Testing Api

describe('Testing  Api / ', () => {
  it('test / ', async () => {
    const response = await request.get('/')
    expect(response.body.Server).toEqual('Hello From  Modern Nasa-Api Server - Search Engine Created By Hacknoide Team !')
    expect(response.status).toEqual(200)
  })
})


