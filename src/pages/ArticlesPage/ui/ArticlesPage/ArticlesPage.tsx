import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { articlePageReducer } from '../../model/slice/articlePageSlice'

import cls from './ArticlesPage.module.scss'
import { ArticlesPageFilters } from '../ArticlePageFilters/ArticlesPageFilters'
import { VStack } from 'shared/ui/Stack'

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} >
            <VStack max>
                <ArticlesPageFilters className={cls.filters} />
                <ArticleInfiniteList className={cls.list} />
            </VStack>
        </DynamicModuleLoader>

    )
}

export default ArticlesPage
