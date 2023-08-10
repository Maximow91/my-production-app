import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'
import { updateProfileData } from './updateProfileData'

describe('fetchProfileData', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let dispatch: Dispatch
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let getState: () => StateSchema
    const profileData = {
        id: '2',
        firstname: 'firstname',
        lastname: 'lastname',
        age: 10,
        currency: Currency.EUR,
        country: Country.Armenia,
        city: 'city',
        username: 'admin',
        avatar: 'avatar'
    }

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('success getProfileData', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({
            data: profileData
        }))

        const result = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profileData)
    })

    test('error getProfileData', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({
            status: 403
        }))
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })
    test('validate getProfileData error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, firstname: '' }
            }
        })
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
