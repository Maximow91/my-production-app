import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore
