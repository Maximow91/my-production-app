import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export interface ArticleRatingProps {
    articleId: string
    className?: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { articleId, className } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId })

    const [rateArticleMutation] = useRateArticle()

    const rateArticle = useCallback(async (starsCount: number, feedback?: string) => {
        try {
            void rateArticleMutation({
                articleId,
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback
            })
        } catch (error) {
            console.log(error)
        }
    }, [rateArticleMutation, articleId, userData])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        void rateArticle(starsCount, feedback)
    }, [rateArticle])

    const onCancel = useCallback((starsCount: number) => {
        void rateArticle(starsCount)
    }, [rateArticle])

    if (isLoading) {
        return (
            <Skeleton width={'100%'} height={120} />
        )
    }

    const rating = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    )
})

export default ArticleRating
