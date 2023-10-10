import { memo, type ButtonHTMLAttributes } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./CustomButton.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const CustomButton = memo((props: CustomButtonProps) => {
  const {
    className,
    square,
    theme,
    onClick,
    children,
    disabled = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: !!square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.CustomButton, mods, [
        className as string,
        cls[theme as string],
        cls[size],
      ])}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
