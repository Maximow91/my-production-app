import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type User } from 'entities/User'

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface loginByUsernameProps {
    username: string
    password: string
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', data)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
