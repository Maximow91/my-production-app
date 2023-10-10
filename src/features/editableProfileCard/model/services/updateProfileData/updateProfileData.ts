import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { type Profile } from "@/entities/Profile";
import { ValidateProfileError } from "../../const/const";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (profileId, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length || !formData?.id) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData,
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
