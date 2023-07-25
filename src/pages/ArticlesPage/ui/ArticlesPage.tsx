import { ArticleList, type ArticleView } from 'entities/Article'
import { ArticleViewSelector } from 'features/articleViewSelector'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { getArticlesListView } from '../model/selectors/getArticlesLIstView/getArticlesListView'
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError'
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading'
import { fetchArticles } from '../model/services/fetchArticles'
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice'

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = () => {
    const { t } = useTranslation('article')

    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesListView)
    const articles = useSelector(getArticles.selectAll)

    useInitialEffect(() => {
        dispatch(fetchArticles())
        dispatch(articlePageActions.initState())
    })

    const handleListViewChange = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ArticleViewSelector currentView={view} onViewClick={handleListViewChange} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>

    )
}

export default ArticlesPage
