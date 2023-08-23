import { type StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
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
    test('should return profile form data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: user
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(user)
    })
    test('should work with empty state profile data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
