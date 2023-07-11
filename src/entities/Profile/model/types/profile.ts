import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
    firstname: string
    secondname: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    isLoading: boolean
    readonly: boolean
    data?: Profile
    error?: string
}
