import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ArticleList } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles'
import { getArticlesListView } from '../../model/selectors/getArticlesLIstView/getArticlesListView'
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { getArticles } from '../../model/slice/articlePageSlice'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams()

    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesListView)

    const articles = useSelector(getArticles.selectAll)

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchMoreArticles())
        }
    }, [dispatch])

    return (
        <ArticleList
            className={className}
            view={view}
            articles={articles}
            isLoading={isLoading}
            onEndReached={onLoadNextPart}
        />
    )
}
