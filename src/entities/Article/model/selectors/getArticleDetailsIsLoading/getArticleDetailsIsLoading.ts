import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
