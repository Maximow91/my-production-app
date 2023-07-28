/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesHasMore } from '../../selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlesPageNumber'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchMoreArticles = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'articlesPage/addCommentForArticle',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const hasMore = getArticlesHasMore(getState())
        const isLoading = getArticlesPageIsLoading(getState())
        const page = getArticlesPageNumber(getState())
        try {
            if (hasMore && !isLoading) {
                if (hasMore && !isLoading) {
                    dispatch(articlePageActions.setPage(page + 1))
                    void dispatch(fetchArticles({}))
                }
            }
        } catch (e) {
            return thunkApi.rejectWithValue('error')
        }
    }
)
