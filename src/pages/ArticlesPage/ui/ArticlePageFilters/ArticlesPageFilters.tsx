
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ArticleViewSelector } from 'features/articleViewSelector'
import { type ArticleSortField, ArticleSortSelector, type ArticleView, type ArticleType, ArticleTypeTabs } from 'entities/Article'
import { type SortOrder } from 'shared/types'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { getArticlesListView } from '../../model/selectors/getArticlesLIstView/getArticlesListView'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder'
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort'
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType'

import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props
    const view = useSelector(getArticlesListView)
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const fetchData = useCallback(() => {
        void dispatch(fetchArticles({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const handleListViewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    const onOrderChange = useCallback((order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onSortChange = useCallback((
        sort: ArticleSortField
    ) => {
        dispatch(articlePageActions.setSort(sort))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onSearchChange = useCallback((
        search: string
    ) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector order={order} sort={sort} onChangeOrder={onOrderChange} onChangeSortFiels={onSortChange}/>
                <ArticleViewSelector currentView={view} onViewClick={handleListViewChange} />
            </div>
            <Card className={cls.search}>
                <Input value={search} placeholder={t('Поиск')} onChange={onSearchChange } />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />

        </div>
    )
}
