import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLogin username', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '12',
                isLoading: false,
                error: 'err'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual(
            '123'
        )
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined)
    })
})
