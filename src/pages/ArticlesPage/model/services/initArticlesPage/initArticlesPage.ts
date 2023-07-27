/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageIsInited } from '../../selectors/getArticlesPageIsInited/getArticlesPageIsInited'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const inited = getArticlesPageIsInited(getState())

        if (!inited) {
            if (__PROJECT__ !== 'storybook') {
                dispatch(articlePageActions.initState())
                void dispatch(fetchArticles({ page: 1 }))
            }
        }
    }
)
