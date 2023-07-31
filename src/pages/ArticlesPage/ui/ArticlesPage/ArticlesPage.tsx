import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'wigets/Page'
import { getArticlesListView } from '../../model/selectors/getArticlesLIstView/getArticlesListView'
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducer, getArticles } from 'pages/ArticlesPage/model/slice/articlePageSlice'
import { ArticlesPageFilters } from '../ArticlePageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'
import { useSearchParams } from 'react-router-dom'

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams()

    console.log(searchParams)

    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesListView)

    const articles = useSelector(getArticles.selectAll)

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            console.log('onLoadNextPart')
            void dispatch(fetchMoreArticles())
        }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} >
            <Page onScrollEnd={onLoadNextPart} >
                <ArticlesPageFilters />
                <ArticleList className={cls.list} view={view} articles={articles} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>

    )
}

export default ArticlesPage
