import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, type SelectOption } from "@/shared/ui/Select";
import { type SortOrder } from "@/shared/types";

import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSortFiels: (newSortField: ArticleSortField) => void;
  className?: string;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { sort, order, onChangeOrder, onChangeSortFiels, className } = props;
  const { t } = useTranslation();

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дате создания"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("просмотрам"),
      },
    ],
    [t],
  );

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSortFiels}
        options={sortFieldOptions}
        label={t("Сортировать по")}
      />
      <Select
        className={cls.order}
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t("по")}
      />
    </div>
  );
};
