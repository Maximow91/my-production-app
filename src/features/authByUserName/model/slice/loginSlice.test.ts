import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice test', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
        }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' })
    })

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '1'
        }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12'))).toEqual({ password: '12' })
    })

    test('should work with empty state', () => {
        expect(loginReducer(undefined, loginActions.setUsername('123'))).toEqual({
            isLoading: false,
            password: '',
            username: '123'
        })
    })
})
