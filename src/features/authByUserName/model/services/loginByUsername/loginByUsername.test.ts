import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('getLoginByUSername', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })
    // test('success login', async () => {
    //     const userValue = {
    //         username: '123',
    //         id: '12'
    //     }
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         data: userValue
    //     }))

    //     const action = loginByUsername({ username: '123', password: '111' })
    //     const result = await action(dispatch, getState, undefined)
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })

    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         status: 403
    //     }))

    //     const action = loginByUsername({ username: '123', password: '111' })
    //     const result = await action(dispatch, getState, undefined)
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('rejected')
    // })

    test('success login', async () => {
        const userValue = {
            username: '123',
            id: '12'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue
        }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '12' })
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403
        }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '12' })
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
