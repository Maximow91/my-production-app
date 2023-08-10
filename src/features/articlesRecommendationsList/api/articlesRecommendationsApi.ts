import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints(
    {
        endpoints: (build) => ({
            getArticlesRecommendationsList: build.query({
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