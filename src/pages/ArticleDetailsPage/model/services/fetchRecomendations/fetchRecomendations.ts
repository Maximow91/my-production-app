import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchRecomendations = createAsyncThunk<
Article[],
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<string>
>(
    'articlesDetailsPage/fetchRecomendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                    _expand: 'user'
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
