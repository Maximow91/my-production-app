import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <Page data-testid="MainPage">
      {t("Главная страница")}
      <RatingCard
        title="Как вам статья?"
        feedbackTitle="Напишите ваш отзыв"
        hasFeedback={true}
      />
    </Page>
  );
};

export default MainPage;
