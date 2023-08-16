import { type Profile } from '@/entities/Profile'
import { type ValidateProfileError } from '../const/const'

export interface ProfileSchema {
    id?: string
    isLoading: boolean
    readonly: boolean
    data?: Profile
    form?: Profile
    error?: string
    validateErrors?: ValidateProfileError[]
}
