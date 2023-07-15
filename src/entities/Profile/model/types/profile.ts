import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'

export interface Profile {
    firstname?: string
    secondname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    isLoading: boolean
    readonly: boolean
    data?: Profile
    form?: Profile
    error?: string
}
