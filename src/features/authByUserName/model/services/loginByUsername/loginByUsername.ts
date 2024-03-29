import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { userActions, type User } from "@/entities/User";

interface loginByUsernameProps {
  username: string;
  password: string;
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (data, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<User>("/login", data);
    if (!response.data) {
      throw new Error();
    }
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Error");
  }
});
