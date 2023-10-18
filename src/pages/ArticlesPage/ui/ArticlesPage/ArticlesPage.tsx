import {
  DynamicModuleLoader,
  type ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { articlePageReducer } from "../../model/slice/articlePageSlice";

import cls from "./ArticlesPage.module.scss";
import { ArticlesPageFilters } from "../ArticlePageFilters/ArticlesPageFilters";
import { VStack } from "@/shared/ui/Stack";
import { ArticlePageGreeting } from "@/features/articlePageGreeting";

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack max>
        <ArticlesPageFilters testId="ArticlesPage" className={cls.filters} />
        <ArticleInfiniteList className={cls.list} />
        <ArticlePageGreeting />
      </VStack>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
