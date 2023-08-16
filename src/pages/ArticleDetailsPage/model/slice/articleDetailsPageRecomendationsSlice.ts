import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Article'
import { fetchRecomendations } from '../services/fetchRecomendations/fetchRecomendations'
import { type articleDetailsPageRecomendationsSchema } from '../types/articleDetailsPageRecomendationsSchema'

const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecomendations = recomendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
)

const articleDetailsPageRecomendationsSlice = createSlice({
    name: 'articleDetailsPageRecomendationsSlice',
    initialState: recomendationsAdapter.getInitialState<articleDetailsPageRecomendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecomendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchRecomendations.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false
                recomendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRecomendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsPageRecomendationsReducer } = articleDetailsPageRecomendationsSlice
