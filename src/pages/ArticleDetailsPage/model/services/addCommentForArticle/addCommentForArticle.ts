import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
Comment,
string,
ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (commentText, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const userData = getUserAuthData(getState())
        const articleData = getArticleDetailsData(getState())

        if (!articleData || !userData || !commentText) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: articleData.id,
                userId: userData.id,
                text: commentText
            })

            if (!response.data) {
                throw new Error()
            }

            void dispatch(fetchCommentsByArticleId(articleData.id))
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
