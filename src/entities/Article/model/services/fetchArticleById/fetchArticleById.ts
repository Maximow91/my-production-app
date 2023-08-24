import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        console.log('fetch')
        try {
            if (!articleId) {
                throw new Error('')
            }
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user'
                    }
                })

            console.log(response)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
