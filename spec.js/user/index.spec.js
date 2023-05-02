import supertest from "supertest";
import config from '../config.js';
import { login } from '../helper/user.js';
import { authorization } from '../helper/user.js'
import { getName } from '../helper/user.js'
import { deleteUser } from '../helper/user.js'
const name = 'test007'




describe('POST /api/v1/login', ()  =>{
  test('Регистрация пользователя', async () => {
    const res = await login({name, email, password})
    expect(res.status).toEqual(200);
    
  })

})
describe('POST /api/v1/login', ()  =>{
  test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
    const input = {email: 'aaa@gmail.com', password: 'test007'}
    const res = await authorization(input)
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ result: true })
  })

})

describe('POST /api/v1/login', () => {
  test('Получение информации о пользователе', async () => {
    const input = {email: 'aaa@gmail.com', password: 'test007'}
    const res = await getName(input)
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('test007')
  })

})

describe('POST /api/v1/login', () => {
  test('Удаление пользователя', async () => {
    const input = {email: 'aaa@gmail.com', password: 'test007'}
    const res = await deleteUser(input)
      
    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual('Пользователь с таким email не найден')
  })

}) 