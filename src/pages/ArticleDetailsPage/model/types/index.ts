import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { type articleDetailsPageRecomendationsSchema } from './articleDetailsPageRecomendationsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recomendations: articleDetailsPageRecomendationsSchema
}
