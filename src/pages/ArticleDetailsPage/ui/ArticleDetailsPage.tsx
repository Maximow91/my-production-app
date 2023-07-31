
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Page } from 'wigets/Page'
import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleRecomendations } from '../model/slice/articleDetailsPageRecomendationsSlice'
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { getArticlesPageRecomandationsIsLoading } from '../model/selectors/recomendations'
import { fetchRecomendations } from '../model/services/fetchRecomendations/fetchRecomendations'
import { articleDetailsPageReducer } from '../model/slice'

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

    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    const recomendationsIsLoading = useSelector(getArticlesPageRecomandationsIsLoading)
    const recomendations = useSelector(getArticleRecomendations.selectAll)

    const navigate = useNavigate()

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

    const onBackToList = useCallback(() => {
        navigate(RoutePaths.articles)
    }, [navigate])

    if (!id) {
        return (
            <div>{t('Статья не найдена')}
            </div>

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <CustomButton theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</CustomButton>
                <ArticleDetails id={id}/>
                <Text className={cls.title} title={t('Рекомендуем')} />
                <ArticleList className={cls.recomendations} articles={recomendations} isLoading={recomendationsIsLoading} target='_blank' />
                <Text className={cls.title} title={t('Комментарии')} />
                <AddCommentForm onSendCommentSendPress={sendComment} />
                <CommentList className={cls.commentList} comments ={comments} isLoading={isLoading}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage
