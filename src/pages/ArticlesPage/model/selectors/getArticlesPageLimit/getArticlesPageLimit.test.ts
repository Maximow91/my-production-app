import { type StateSchema } from '@/app/providers/StoreProvider'
import { getArticlesPageLimit } from './getArticlesPageLimit'

describe('getArticlesPageLimit', () => {
    test('should return articlesPage limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                limit: 1
            }
        }
        expect(getArticlesPageLimit(state as StateSchema)).toBe(1)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(undefined)
    })
})
