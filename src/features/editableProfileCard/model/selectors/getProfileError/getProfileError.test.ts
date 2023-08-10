import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
    test('should return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error!'
            }
        }
        expect(getProfileError(state as StateSchema)).toBe('error!')
    })
    test('should work with empty state profile data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
