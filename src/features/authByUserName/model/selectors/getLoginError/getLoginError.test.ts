import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLogin Error', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: false,
                error: 'err'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('err')
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})
