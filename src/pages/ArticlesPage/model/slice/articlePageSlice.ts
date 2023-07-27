import {
    createEntityAdapter,
    createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { ArticleView, type Article } from 'entities/Article'
import { type ArticlesPageSchema } from '../types/ArticlePageSchema'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
        limit: undefined,
        page: 1,
        hasMore: true,
        _inited: false

    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: state => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.limit = view === ArticleView.TILE ? 9 : 4
            state.view = view
            state._inited = true
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled, (
                state,
                action: PayloadAction<Article[]>
            ) => {
                state.isLoading = false
                articlesAdapter.setMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articlePageActions } = articlePageSlice
export const { reducer: articlePageReducer } = articlePageSlice
