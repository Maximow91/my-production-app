import { type StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
    test('should return profile data', () => {
        const user = {
            firstname: 'firstname',
            lastname: 'lastname',
            age: 10,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'city',
            username: 'admin',
            avatar: 'avatar'
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: user
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(user)
    })
    test('should work with empty state profile data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
