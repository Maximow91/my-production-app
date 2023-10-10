import { type StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsIsLoading } from "./getArticleDetailsIsLoading";

describe("getArticlesDetailsIsLoading", () => {
  test("Should return articles details error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state articleDetails data", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
