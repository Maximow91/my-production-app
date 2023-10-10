import { type StateSchema } from "@/app/providers/StoreProvider";
import { getArticlesHasMore } from "./getArticlesHasMore";

describe("getArticlesHasMore", () => {
  test("should return hasMore", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        hasMore: true,
      },
    };
    expect(getArticlesHasMore(state as StateSchema)).toBe(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesHasMore(state as StateSchema)).toEqual(undefined);
  });
});
