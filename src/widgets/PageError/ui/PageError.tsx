import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CustomButton } from "@/shared/ui/CustomButton";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPageHandler = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className as string])}>
      {t("Что то пошло не так")}
      <CustomButton onClick={reloadPageHandler}>
        {t("Перезагрузить страницу")}
      </CustomButton>
    </div>
  );
};
