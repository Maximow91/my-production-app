import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType, type Article } from "@/entities/Article";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";
import { getArticlesPageLimit } from "../../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPageNumber } from "../../selectors/getArticlesPageNumber/getArticlesPageNumber";
import { getArticlesPageOrder } from "../../selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSearch } from "../../selectors/getArticlesPageSearch/getArticlesPageSearch";
import { getArticlesPageSort } from "../../selectors/getArticlesPageSort/getArticlesPageSort";
import { getArticlesPageType } from "../../selectors/getArticlesPageType/getArticlesPageType";

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  FetchArticlesProps,
  ThunkConfig<string>
>("articlesPage/fetchArticles", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const order = getArticlesPageOrder(getState());
  const sort = getArticlesPageSort(getState());
  const search = getArticlesPageSearch(getState());
  const page = getArticlesPageNumber(getState());
  const type = getArticlesPageType(getState());

  const limit = getArticlesPageLimit(getState());

  try {
    addQueryParams({ sort, order, search, type });
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
