import supertest from "supertest";
import user from '../helper/user'
import {deleteBook} from '../helper/user'
import {createBook} from '../helper/user'
import{getBook} from '../helper/user'
import{getInfoBook} from '../helper/user' 


describe('user', () => {
    test('Создание книги', async () => {
      const input = {
        "userID": "123",
        "isbn": "pirates"
      }
      const res = await createBook(input)
      expect(res.status).toEqual(201);
      
    })
  
  })

  describe('user', () => {
    test('обновление книги', async () => {

      const res = await getInfoBook()
      expect(res.status).toEqual(200);
      
    })
  
  })

  describe('user', () => {
    test('Информация о книге', async () => {
      const res = await getBook()
      expect(res.status).toEqual(200);
      
    })
  
  })

  describe('user', () => {
    test('Удаление книги', async () => {
        const input = {
            "isbn": "pirates",
            "userID": "123"
          }
      const res = await deleteBook(input)
      expect(res.status).toEqual(204);
      
    })
  
  })

