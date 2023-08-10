import { type Article } from 'entities/Article'
import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints(
    {
        endpoints: (build) => ({
            getArticlesRecommendationsList: build.query<Article[], number>({
                query: (limit) => ({
                    url: '/articles',
                    params: {
                        _limit: limit
                    }
                })
            })
        }),
        overrideExisting: false
    }
)

export const useArticlesRecommendationsList = recommendationsApi.useGetArticlesRecommendationsListQuery
