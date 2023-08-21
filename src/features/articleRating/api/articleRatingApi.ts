
import { type Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingArgs {
    userId: string
    articleId: string
}

interface RateArticleArgs {
    userId: string
    articleId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints(
    {
        endpoints: (build) => ({
            getArticleRating: build.query<Rating[], GetArticleRatingArgs>({
                query: ({ userId, articleId }) => ({
                    url: '/article-ratings',
                    params: {
                        userId,
                        articleId
                    }
                })
            }),
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            rateArticle: build.mutation<void, RateArticleArgs >({
                query: (arg) => ({
                    url: '/article-ratings',
                    method: 'POST',
                    body: arg
                })
            })

        }),
        overrideExisting: false
    }
)

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery

export const useRateArticle = articleRatingApi.useRateArticleMutation
