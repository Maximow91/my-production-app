import { type HTMLAttributeAnchorTarget, useCallback, useState, useEffect, useRef } from 'react'
import { Virtuoso, VirtuosoGrid, type VirtuosoHandle } from 'react-virtuoso'
import { ARTICLE_LIST_ITEM_INDEX } from 'shared/const/sessionStorage'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleView } from '../../model/const/const'

import cls from './ArticleList.module.scss'

interface ArticleListProps {
    articles: Article[]
    target?: HTMLAttributeAnchorTarget
    className?: string
    isLoading?: boolean
    view?: ArticleView
    onEndReached?: () => void
    withHeader?: boolean
}

const storybookStyles = { width: window.innerWidth, height: innerHeight }

export const ArticleList = (props: ArticleListProps) => {
    const { articles, onEndReached, target, isLoading, view = ArticleView.TILE, className, withHeader = true } = props

    const [initialIndex, setInitialIndex] = useState(1)

    const listRef = useRef<VirtuosoHandle>(null)

    useEffect(() => {
        const index = Number(sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX))
        if (index && articles.length >= index) {
            setInitialIndex(index)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (view === ArticleView.TILE) {
            const index = Number(sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX))
            if (index && articles.length >= index) {
                listRef.current?.scrollToIndex(index)
            }
        }
    }, [view, articles.length])

    const renderArticles = useCallback((index: number) => {
        const article = articles[index]
        return <ArticleListItem index={index} className={cls.card} key={article.id} article={article} view={view} target={target} />
    }, [articles, view, target])

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title='Статьи не найдены' />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === ArticleView.LIST
                ? (<Virtuoso
                    style={__PROJECT__ === 'storybook' ? storybookStyles : { height: '100%', flexGrow: 1 }}
                    totalCount={articles.length}
                    itemContent={renderArticles}
                    initialTopMostItemIndex={initialIndex}
                    endReached={onEndReached}
                    components={{
                        Footer: () => {
                            if (isLoading) {
                                return (
                                    <div className={classNames(cls.footerContainer, {}, [className, cls[view]])}>
                                        {new Array(4).fill(0).map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)}
                                    </div>
                                )
                            } else {
                                return <div className={cls.footer}/>
                            }
                        }
                    }}
                >
                </Virtuoso>)
                : (<VirtuosoGrid
                    ref={listRef}
                    endReached={onEndReached}
                    data={articles}
                    listClassName={cls.itemsWrapper}
                    components={{
                        // eslint-disable-next-line react/prop-types
                        ScrollSeekPlaceholder: ({ index }) => {
                            return <div className={cls.ItemContainer}>
                                <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
                            </div>
                        }
                    }}
                    scrollSeekConfiguration={{
                        enter: velocity => Math.abs(velocity) > 200,
                        exit: velocity => Math.abs(velocity) < 1

                    }}
                    totalCount={articles.length}
                    style={__PROJECT__ === 'storybook' ? storybookStyles : { width: '100%', height: '100%' }}
                    itemContent={renderArticles} />)}
        </div>

    )
}
