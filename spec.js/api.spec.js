import axios from 'axios'
import {describe, expect, test} from '@jest/globals'




test('GET', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com',
        method: 'get',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
    expect(res.status).toEqual(200)
})


    test('post authorization', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/User',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar20001',
                password: '123_!qQ',
            })

        })

    expect(res.status).toEqual(400)
    console.log(res.status)
})

test('post login pass', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/User',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar456',
                password: '123_!qQ',
            })
        })

    expect(res.status).toEqual(404)
})
test('post password pass', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/User',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar456',
                password: '123_!q',
            })
        })

    expect(res.status).toEqual(404)
})

test('post generate token', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar456',
                password: '123_!q',
            })
        })

    expect(res.result).toEqual('User authorization failed')
})

test('post generate token', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar456',
                password: '123_!q',
            })
        })

    expect(res.result).toEqual('User authorization failed')
})

test('post generate token', async () => {
    let res = await axios({
        url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify( {
                login: 'ildar456',
                password: '123_!q',
            })
        })

    expect(res.status).toEqual(200)
})