import { type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINE = "outline",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  theme?: CardTheme;
  max?: boolean;
}

export const Card = (props: CardProps) => {
  const {
    children,
    className,
    theme = CardTheme.OUTLINE,
    max,
    ...otherProps
  } = props;
  return (
    <div
      {...otherProps}
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
    >
      {children}
    </div>
  );
};
