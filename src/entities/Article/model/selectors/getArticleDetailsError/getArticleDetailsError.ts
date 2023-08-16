import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error
