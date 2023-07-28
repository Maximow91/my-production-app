/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleType, type ArticleSortField } from 'entities/Article'
import { type SortOrder } from 'shared/types'
import { getArticlesPageIsInited } from '../../selectors/getArticlesPageIsInited/getArticlesPageIsInited'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const inited = getArticlesPageIsInited(getState())

        if (!inited) {
            if (__PROJECT__ !== 'storybook') {
                const orderFromUrl = searchParams.get('sort')
                const searchFromUrl = searchParams.get('search')
                const sortFromUrl = searchParams.get('sort')
                const typeFromUrl = searchParams.get('type')
                if (orderFromUrl) {
                    dispatch(articlePageActions.setOrder(orderFromUrl as SortOrder))
                }
                if (searchFromUrl) {
                    dispatch(articlePageActions.setSearch(searchFromUrl))
                }
                if (sortFromUrl) {
                    dispatch(articlePageActions.setSort(sortFromUrl as ArticleSortField))
                }
                if (typeFromUrl) {
                    dispatch(articlePageActions.setType(typeFromUrl as ArticleType))
                }
                dispatch(articlePageActions.initState())
                void dispatch(fetchArticles({}))
            }
        }
    }
)
