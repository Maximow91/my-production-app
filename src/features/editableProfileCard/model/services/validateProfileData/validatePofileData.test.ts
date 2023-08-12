import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../const/const'
import { validateProfileData } from './validateProfileData'

describe('validateProfileData', () => {
    const profileData = {
        firstname: 'firstname',
        lastname: 'lastname',
        age: 10,
        currency: Currency.EUR,
        country: Country.Armenia,
        city: 'city',
        username: 'admin',
        avatar: 'avatar'
    }

    test('success validate', async () => {
        const result = validateProfileData(profileData)
        expect(result).toEqual([])
    })

    test('incorrect age', () => {
        const result = validateProfileData({ ...profileData, age: undefined })
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect username', () => {
        const result = validateProfileData({ ...profileData, firstname: '', lastname: '' })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect country', () => {
        const result = validateProfileData({ ...profileData, country: undefined })
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('incorrect all', () => {
        const result = validateProfileData({ })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY])
    })
})
