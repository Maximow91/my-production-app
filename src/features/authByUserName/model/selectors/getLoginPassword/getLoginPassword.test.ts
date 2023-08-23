import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLogin password', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '12',
                isLoading: false,
                error: 'err'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('12')
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
    })
})
