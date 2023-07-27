import { ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from '../types/ArticlePageSchema'
import { articlePageActions, articlePageReducer } from './articlePageSlice'

describe('Slice test', () => {
    test('setView', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.LIST
        }
        expect(articlePageReducer(state as ArticlesPageSchema, articlePageActions.setView(ArticleView.TILE))).toEqual({ view: ArticleView.TILE })
    })

    test('setLimit', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            limit: 8
        }
        expect(articlePageReducer(state as ArticlesPageSchema, articlePageActions.setLimit(2))).toEqual({ limit: 2 })
    })

    test('setPage', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            page: 1
        }
        expect(articlePageReducer(state as ArticlesPageSchema, articlePageActions.setPage(3))).toEqual({ page: 3 })
    })

    test('setHasMore', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            hasMore: true
        }
        expect(articlePageReducer(state as ArticlesPageSchema, articlePageActions.setHasMore(false))).toEqual({ hasMore: false })
    })

    // test('updateProfile', () => {
    //     const state: DeepPartial<ProfileSchema> = {
    //         form: {
    //             username: 'dima',
    //             age: 13
    //         }

    //     }
    //     expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'biba', age: 20 }))).toEqual({
    //         form: {
    //             username: 'biba',
    //             age: 20
    //         }
    //     })
    // })

    // test('updateProfile service pending', () => {
    //     const state: DeepPartial<ProfileSchema> = {
    //         isLoading: false,
    //         validateErrors: [ValidateProfileError.SERVER_ERROR]
    //     }
    //     expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
    //         isLoading: true,
    //         validateErrors: undefined
    //     })
    // })

    // test('updateProfile service fulfilled', () => {
    //     const profile = { firstname: 'Test', lastname: 'last', age: 10 }
    //     const state: DeepPartial<ProfileSchema> = {
    //         isLoading: true,
    //         readonly: true
    //     }
    //     expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profile, ''))).toEqual({
    //         isLoading: false,
    //         validateErrors: undefined,
    //         data: profile,
    //         form: profile,
    //         readonly: true
    //     })
    // })
})
