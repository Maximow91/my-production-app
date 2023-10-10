import { type ChangeEvent, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption<T> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  readonly?: boolean;
  options?: Array<SelectOption<T>>;
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const mods = {};

  const optionList = useMemo(() => {
    return options?.map((opt) => {
      return (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      );
    });
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("onChange", e.target.value);
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}:`}</span>}
      <select
        disabled={readonly}
        onChange={onChangeHandler}
        value={value}
        className={cls.select}
      >
        {optionList}
      </select>
    </div>
  );
};
