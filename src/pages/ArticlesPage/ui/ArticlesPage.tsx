import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, type ArticleView } from 'entities/Article'
import { ArticleViewSelector } from 'features/articleViewSelector'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'shared/ui/Page/Page'
import { getArticlesListView } from '../model/selectors/getArticlesLIstView/getArticlesListView'
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice'
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesListView)
    const articles = useSelector(getArticles.selectAll)

    useInitialEffect(() => {
        void dispatch(initArticlesPage())
    })

    const handleListViewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchMoreArticles())
        }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} >
            <Page onScrollEnd={onLoadNextPart} >
                <ArticleViewSelector currentView={view} onViewClick={handleListViewChange} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>

    )
}

export default ArticlesPage
