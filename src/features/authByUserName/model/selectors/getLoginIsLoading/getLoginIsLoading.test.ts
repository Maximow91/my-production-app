import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: true,
                error: 'err'
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
