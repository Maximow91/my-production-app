import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { Text } from "@/shared/ui/Text";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { isArticlePageWasOpened } = useJsonSettings();

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      void dispatch(
        saveJsonSettings({
          isArticlePageWasOpened: true,
        }),
      );
    }
  }, [dispatch, isArticlePageWasOpened]);

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Text
        title={t("Добро пожаловать")}
        text={t(
          "Здесь вы можете искать и просматривать статьи на различные темы",
        )}
      />
    </Modal>
  );
});
