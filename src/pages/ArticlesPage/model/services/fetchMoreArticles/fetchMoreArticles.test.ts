import { fetchMoreArticles } from "./fetchMoreArticles";

import { TestAsyncThunk } from "@/shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("fetchNextArticlesPage.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchMoreArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({});
  });
  test("fetchAritcles not called", async () => {
    const thunk = new TestAsyncThunk(fetchMoreArticles, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
