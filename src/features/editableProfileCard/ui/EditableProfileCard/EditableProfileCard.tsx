import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ProfileCard } from "@/entities/Profile";
import { Text, TextTheme } from "@/shared/ui/Text";
import { VStack } from "@/shared/ui/Stack";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  type ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getValidateProfileErrors } from "../../model/selectors/getValidateProfileErrors/getValidateProfileErrors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { ValidateProfileError } from "../../model/const/const";

interface EditableProfileCardProps {
  id?: string;
  className?: string;
}

const reducers: ReducerList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { id, className } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getValidateProfileErrors);

  const validateErrorsTranslate = {
    [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
  };

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency: currency || Currency.RUB,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.updateProfile({
          country: country || Country.Belarus,
        }),
      );
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames("", {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err: any) => (
            // @ts-expect-error
            <Text
              data-testid="EditableProfileCard.Error"
              theme={TextTheme.ERROR}
              key={validateErrors[err]}
              text={validateErrorsTranslate[err]}
            />
          ))}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
