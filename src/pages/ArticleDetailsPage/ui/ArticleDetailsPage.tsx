import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/addCommentForm'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchCommentsByArticleId(id))
        }
    })

    const sendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    if (!id) {
        return (
            <div>{t('Статья не найдена')}
            </div>

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.title} title={t('Комментарии')} />
                <AddCommentForm onSendCommentSendPress={sendComment} />
                <CommentList className={cls.commentList} comments ={comments} isLoading={isLoading}/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage
