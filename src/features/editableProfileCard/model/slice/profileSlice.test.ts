import { ValidateProfileError } from "../const/const";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { type ProfileSchema } from "../types/editableProfileCardSchema";
import { profileActions, profileReducer } from "./profileSlice";

describe("Slice test", () => {
  test("setReadonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test("cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      form: {
        username: "dima",
      },
      data: {
        username: "vova",
      },
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      form: {
        username: "vova",
      },
      data: {
        username: "vova",
      },
    });
  });

  test("updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: "dima",
        age: 13,
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "biba", age: 20 }),
      ),
    ).toEqual({
      form: {
        username: "biba",
        age: 20,
      },
    });
  });

  test("updateProfile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("updateProfile service fulfilled", () => {
    const profile = { firstname: "Test", lastname: "last", age: 10 };
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(profile, ""),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data: profile,
      form: profile,
      readonly: true,
    });
  });
});
