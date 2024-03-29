import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }
  return (
    <Dropdown
      direction="bottom left"
      className={classNames("", {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t("Админка"),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t("Профиль"),
          href: getRouteProfile(authData?.id),
        },
        {
          content: t("Выйти"),
          onClick: onLogout,
        },
      ]}
      trigger={
        <Avatar fallbackInverted={true} size={30} src={authData?.avatar} />
      }
    />
  );
};
