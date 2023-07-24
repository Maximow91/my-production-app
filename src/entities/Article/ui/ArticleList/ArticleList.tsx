import { ArticleView, type Article } from '../../model/types/article'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
    const { articles, isLoading, view = ArticleView.TILE, className } = props

    const renderArticles = useCallback((article: Article) => {
        return <ArticleListItem className={cls.card} key={article.id} article={article} view={view} />
    }, [view])

    const { t } = useTranslation()

    if (isLoading) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {new Array(view === ArticleView.TILE ? 9 : 3).fill(0).map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)}
        </div>
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.length > 0
                ? articles.map(renderArticles)
                : null
            }
        </div>
    )
}
