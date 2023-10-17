import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import DarkIcon from "@/shared/assets/icons/dark.svg";
import LightIcon from "@/shared/assets/icons/light.svg";
import { ButtonTheme, CustomButton } from "@/shared/ui/CustomButton";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { Theme } from "@/shared/const/theme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const handleThemePress = useCallback(() => {
    toggleTheme((newTheme) => {
      void dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <CustomButton
      theme={ButtonTheme.CLEAR}
      className={classNames("", {}, [className as string])}
      onClick={handleThemePress}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </CustomButton>
  );
});
