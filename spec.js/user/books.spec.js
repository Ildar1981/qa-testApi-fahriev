import supertest from "supertest";
import user from '../helper/user'
import {deleteBook} from '../helper/user'
import {createBook} from '../helper/user'
import{getBook} from '../helper/user'
import{getInfoBook} from '../helper/user' 

describe('user', () => {
describe('POST /api/v1/login', () => {
    test('Создание книги', async () => {
      const input = {
        "userId": "123",
        "isbn": "pirates"
      }
      const res = await createBook(input)
      expect(res.status).toEqual(201);
      
    })
  
  })

  describe('POST /api/v1/login', () => {
    test('обновление книги', async () => {

      const res = await getInfoBook()
      expect(res.status).toEqual(200);
      
    })
  
  })

  describe('user', () => {
    test('Получение информации о книге', async () => {
      const res = await getBook()
      expect(res.status).toEqual(200);
      
    })
  
  })

  describe('user', () => {
    test('Удаление книги', async () => {
        const input = {
            "isbn": "pirates",
            "userId": "123"
          }
      const res = await deleteBook(input)
      expect(res.status).toEqual(204);
      
    })
  
  })
})
