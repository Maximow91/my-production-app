import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import { type Currency, CurrencySelect } from "@/entities/Currency";
import { CountrySelect, type Country } from "@/entities/Country";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";

import { type Profile } from "../../model/types/profile";

import cls from "./ProfileCard.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ProfileCardProps {
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (coutry: Country) => void;
  className?: string;
  readonly?: boolean;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const {
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly,
    className,
    data,
    isLoading,
    error,
  } = props;

  const mods = {
    [cls.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        className={classNames(cls.ProfileCard, mods, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке пользователя")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data.avatar} />
        </HStack>
      )}
      <Input
        data-testid="ProfileCard.firstname"
        onChange={onChangeFirstname}
        readonly={readonly}
        className={cls.input}
        label={t("Имя")}
        value={data?.firstname}
      />
      <Input
        data-testid="ProfileCard.lastname"
        onChange={onChangeLastname}
        readonly={readonly}
        className={cls.input}
        label={t("Фамилия")}
        value={data?.lastname}
      />
      <Input
        onChange={onChangeAge}
        readonly={readonly}
        className={cls.input}
        label={t("Возраст")}
        value={data?.age}
      />
      <Input
        onChange={onChangeCity}
        readonly={readonly}
        className={cls.input}
        label={t("Город")}
        value={data?.city}
      />
      <Input
        onChange={onChangeUsername}
        readonly={readonly}
        className={cls.input}
        label={t("Username")}
        value={data?.username}
      />
      <CurrencySelect
        className={cls.input}
        readonly={readonly}
        value={data?.currency}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        className={cls.input}
        readonly={readonly}
        value={data?.country}
        onChange={onChangeCountry}
      />
      {!readonly && (
        <Input
          onChange={onChangeAvatar}
          readonly={readonly}
          className={cls.input}
          label={t("Введите ссылку на аватар")}
          value={data?.avatar}
        />
      )}
    </VStack>
  );
};
