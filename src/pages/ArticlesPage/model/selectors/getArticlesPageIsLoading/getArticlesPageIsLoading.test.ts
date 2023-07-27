import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticlesPageIsLoading } from './getArticlesPageIsLoading'

describe('getArticlesPageIsLoading', () => {
    test('should return articles is loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true
            }
        }
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
