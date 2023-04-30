import supertest from 'supertest'

import config from '../config.js'
const { url } = config


  async function login(payload) {
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/doregister')
      .set('Accept', 'application/json')
      .send({email, name, password})

    return res;
      
  }

  async function authorization(payload){
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/dologin')
      .set('Accept', 'application/json')
      .send({ email, password })

      return res;
  }

  async function getName(payload){
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/getuserfull')
      .set('Accept', 'application/json')
      .send({ email, password })

      return res;
  }

  async function deleteUser(payload){
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/deleteuser')
      .set('Accept', 'application/json')
      .send({ email, password })

      return res;
  }

  
export default user


