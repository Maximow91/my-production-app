import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit'

interface FetchArticlesProps {
    page?: number
}

export const fetchArticles = createAsyncThunk<
Article[],
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
FetchArticlesProps,
ThunkConfig<string>
>(
    'articlesPage/fetchArticles',
    async (props, thunkApi) => {
        const { page = 1 } = props

        const { extra, rejectWithValue, getState } = thunkApi

        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
