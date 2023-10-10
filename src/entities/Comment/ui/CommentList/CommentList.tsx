import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { type Comment } from "../../model/types/comment";
import { Text } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "@/shared/ui/Stack";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { comments, className, isLoading } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames("", {}, [className])}>
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </VStack>
  );
});
