import { type Profile } from 'entities/Profile'

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    id?: string
    isLoading: boolean
    readonly: boolean
    data?: Profile
    form?: Profile
    error?: string
    validateErrors?: ValidateProfileError[]
}
