import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { type JsonSettings } from "../types/jsonSettings";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { getJsonSettings } from "../selectors/jsonSettings";
import { setJsonSettingsMutation } from "../../api/userApi";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>("user/saveJsonSettings", async (newJsonSettings, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const currentSettings = getJsonSettings(thunkAPI.getState());

  if (!userData) {
    return thunkAPI.rejectWithValue("");
  }
  try {
    const response = await thunkAPI
      .dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      )
      .unwrap();
    if (!response.jsonSettings) {
      return thunkAPI.rejectWithValue("");
    }
    return response.jsonSettings;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error");
  }
});
