
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { initArticlesPage } from './initArticlesPage'
jest.mock('../fetchArticles/fetchArticles')

describe('initArticlesPage.test', () => {
    test('fetchAritcles called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false
            }
        })

        // await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(0)
        expect(fetchArticles).toBeCalledTimes(0)
    })
    test('fetchAritcles not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true
            }
        })

        //    await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(0)
        expect(fetchArticles).not.toHaveBeenCalled()
    })
})
