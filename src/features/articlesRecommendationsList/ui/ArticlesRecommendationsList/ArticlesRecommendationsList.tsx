import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { Text } from '@/shared/ui/Text/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { useArticlesRecommendationsList } from '../../api/articlesRecommendationsApi'

interface ArticlesRecommendationsListProps {
    className?: string
}

export const ArticlesRecommendationsList = memo((props: ArticlesRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { data: articles, isLoading, error } = useArticlesRecommendationsList(3)

    if (isLoading || error || !articles?.length) {
        return null
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text title={t('Рекомендуем')} />
            <ArticleList articles={articles} isLoading={false} target='_blank' withHeader={false} />
        </VStack>
    )
})
