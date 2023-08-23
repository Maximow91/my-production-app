import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleView } from '@/entities/Article'
import { getArticlesListView } from './getArticlesListView'

describe('getArticlesList view', () => {
    test('should return articles list view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                hasMore: true,
                view: ArticleView.LIST
            }
        }
        expect(getArticlesListView(state as StateSchema)).toBe(ArticleView.LIST)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticlesListView(state as StateSchema)).toEqual(undefined)
    })
})
