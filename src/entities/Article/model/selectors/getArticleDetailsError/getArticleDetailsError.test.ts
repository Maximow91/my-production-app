import { type StateSchema } from '@/app/providers/StoreProvider'
import { getArticleDetailsError } from './getArticleDetailsError'

describe('getArticlesDetailError', () => {
    test('Should return articles details error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'some error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toBe('some error')
    })
    test('should work with empty state articleDetails data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
