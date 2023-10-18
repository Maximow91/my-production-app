import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserDataByIdQuery } from "../../api/userApi";
import { type User } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/initAuthData",
  async (_, thunkAPI) => {
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return thunkAPI.rejectWithValue("");
    }
    try {
      const response = await thunkAPI
        .dispatch(getUserDataByIdQuery(userId))
        .unwrap();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);
