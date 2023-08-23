import { type StateSchema } from '@/app/providers/StoreProvider'
import { getArticlesPageNumber } from './getArticlesPageNumber'

describe('getArticlesPageNumber', () => {
    test('should return articles is loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                page: 10
            }
        }
        expect(getArticlesPageNumber(state as StateSchema)).toBe(10)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesPageNumber(state as StateSchema)).toEqual(1)
    })
})
