import { Suspense, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";

import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { VStack } from "@/shared/ui/Stack";
import { Loader } from "@/shared/ui/Loader";

interface ArticlesDetailsCommentsProps {
  id?: string;
  className?: string;
}

export const ArticlesDetailsComments = (
  props: ArticlesDetailsCommentsProps,
) => {
  const { id, className } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    if (__PROJECT__ !== "storybook") {
      if (id) {
        void dispatch(fetchCommentsByArticleId(id));
      }
    }
  });

  const sendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  return (
    <VStack gap="16" className={classNames("", {}, [className])}>
      <Text title={t("Комментарии")} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendCommentSendPress={sendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={isLoading} />
    </VStack>
  );
};
