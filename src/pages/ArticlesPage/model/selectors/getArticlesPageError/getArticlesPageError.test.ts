import { type StateSchema } from '@/app/providers/StoreProvider'
import { getArticlesPageError } from './getArticlesPageError'

describe('getArticlesPage error', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error'
            }
        }
        expect(getArticlesPageError(state as StateSchema)).toBe('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined)
    })
})
