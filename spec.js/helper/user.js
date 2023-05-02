import supertest from 'supertest'

import config from '../config.js'
const { url } = config

let token = ''


const user = {
 
  login: (payload) => {
   
    return supertest(config.baseUrl)
      .post('/Account/v1/Authorized')
      .set('Accept', 'application/json')
      .send(payload)
  },
  
 
  async getAuthToken() {
    const payload = config.credentials

    const res = await this.login(payload) 

    return res.body.token
  },


  async getAuthTokenWithCache() {
    if (token) {
      return token
    }

    token = await this.getAuthToken()

    return token
  },

  user: (token) => {
    return supertest(config.baseUrl)
      .get('/Account/v1/GenerateToken')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send()
  }
}

async function deleteBook(payload){
  const res = await supertest(config.baseUrl)
    .delete('v1/Books?UserID=123')
    .set('Accept', 'application/json')
    .send({ userID: payload.userID, isbn: payload.isbn})

    return res;
}

async function createBook(payload){
  const res = await supertest(config.baseUrl)
    .delete('/BookStore/v1/Books/1234')
    .set('Accept', 'application/json')
    .send({userID: payload.userID, isbn: payload.isbn})

    return res;
}

async function getBook(payload){
  const res = await supertest(config.baseUrl)
    .delete('v1/Books?UserId=123')
    .set('Accept', 'application/json')
    .send({userID: payload.userID, isbn: payload.isbn})

    return res;
}

async function getInfoBook(payload){
  const res = await supertest(config.baseUrl)
    .get('BookStore/v1/Book?ISBN=123')
    .set('Accept', 'application/json')
    .send({userID: payload.userID, isbn: payload.isbn})

    return res;
}

export default user




