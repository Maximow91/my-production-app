import { type StateSchema } from "@/app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("should return profile isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state profile data", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
