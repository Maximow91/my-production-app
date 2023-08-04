
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Page } from 'wigets/Page'
import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleRecomendations } from '../../model/slice/articleDetailsPageRecomendationsSlice'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticlesPageRecomandationsIsLoading } from '../../model/selectors/recomendations'
import { fetchRecomendations } from '../../model/services/fetchRecomendations/fetchRecomendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

import cls from './ArticleDetailsPage.module.scss'
import { VStack } from 'shared/ui/Stack'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    const recomendationsIsLoading = useSelector(getArticlesPageRecomandationsIsLoading)
    const recomendations = useSelector(getArticleRecomendations.selectAll)

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (id) {
                void dispatch(fetchCommentsByArticleId(id))
                void dispatch(fetchRecomendations())
            }
        }
    })

    const sendComment = useCallback((text: string) => {
        void dispatch(addCommentForArticle(text))
    }, [dispatch])

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
                    <Text className={cls.title} title={t('Рекомендуем')} />
                    <ArticleList className={cls.recomendations} articles={recomendations} isLoading={recomendationsIsLoading} target='_blank' />
                    <Text className={cls.title} title={t('Комментарии')} />
                    <AddCommentForm onSendCommentSendPress={sendComment} />
                    <CommentList className={cls.commentList} comments ={comments} isLoading={isLoading}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage
