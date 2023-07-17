import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { ValidateProfileError } from '../../types/profile'
import { getValidateProfileErrors } from './getValidateProfileErrors'

describe('getProfileValidateErrors', () => {
    test('should return profile validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_AGE]
            }
        }
        expect(getValidateProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('should work with empty state profile data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined)
    })
})
