import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesPageIsInited = (state: StateSchema) =>
  state.articlesPage?._inited;
