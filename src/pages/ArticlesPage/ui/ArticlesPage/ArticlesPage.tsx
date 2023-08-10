import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { articlePageReducer } from '../../model/slice/articlePageSlice'

import cls from './ArticlesPage.module.scss'

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} >
            <ArticleInfiniteList className={cls.list} />
        </DynamicModuleLoader>

    )
}

export default ArticlesPage
