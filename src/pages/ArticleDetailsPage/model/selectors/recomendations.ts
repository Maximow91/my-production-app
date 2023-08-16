import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticlesPageRecomandationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recomendations.isLoading
}

export const getArticlesPageRecomandationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recomendations.error
}
