import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'
import { getLoginState } from './getLoginState'

describe('getLogin state', () => {
    test('should return state value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: false,
                error: 'err'
            }
        }
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '123',
            password: '123',
            isLoading: false,
            error: 'err'
        })
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})
