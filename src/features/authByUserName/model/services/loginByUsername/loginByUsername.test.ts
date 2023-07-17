import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUsername'

describe('getLoginByUSername', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('success login', async () => {
        const userValue = {
            username: '123',
            id: '12'
        }

        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({
            data: userValue
        }))

        const result = await thunk.callThunk({ username: '123', password: '12' })
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({
            status: 403
        }))
        const result = await thunk.callThunk({ username: '123', password: '12' })
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
