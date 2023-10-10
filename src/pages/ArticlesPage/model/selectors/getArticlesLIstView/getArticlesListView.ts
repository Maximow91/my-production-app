import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesListView = (state: StateSchema) =>
  state.articlesPage?.view;
