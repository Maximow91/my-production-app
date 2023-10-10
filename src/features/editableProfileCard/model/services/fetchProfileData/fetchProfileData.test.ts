import { type Dispatch } from "@reduxjs/toolkit";
import { type StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/test/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let dispatch: Dispatch;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let getState: () => StateSchema;
  const profileData = {
    firstname: "firstname",
    lastname: "lastname",
    age: 10,
    currency: Currency.EUR,
    country: Country.Armenia,
    city: "city",
    username: "admin",
    avatar: "avatar",
  };

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("success getProfileData", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: profileData,
      }),
    );

    const result = await thunk.callThunk("1");
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(profileData);
  });

  test("error getProfileData", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );
    const result = await thunk.callThunk("1");
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
