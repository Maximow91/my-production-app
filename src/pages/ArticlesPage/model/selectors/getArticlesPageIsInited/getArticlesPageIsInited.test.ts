
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticlesPageIsInited } from './getArticlesPageIsInited'

describe('getArticlesPageisInited', () => {
    test('should return isInited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                _inited: true
            }
        }
        expect(getArticlesPageIsInited(state as StateSchema)).toBe(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesPageIsInited(state as StateSchema)).toEqual(undefined)
    })
})
