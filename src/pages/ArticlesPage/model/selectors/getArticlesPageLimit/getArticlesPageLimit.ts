import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit
