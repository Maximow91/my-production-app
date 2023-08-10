
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Page } from 'wigets/Page'
import { ArticlesRecommendationsList } from 'features/articlesRecommendationsList'
import { ArticleDetails } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticlesDetailsComments } from '../ArticlesDetailsComments/ArticlesDetailsComments'

import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div>{t('Статья не найдена')}
            </div>

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap='16' max >
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id}/>
                    <ArticlesRecommendationsList className={cls.recommendations}/>
                    <ArticlesDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage
