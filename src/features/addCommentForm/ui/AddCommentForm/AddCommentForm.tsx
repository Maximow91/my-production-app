import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  type ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { CustomButton } from "@/shared/ui/CustomButton";
import { Input } from "@/shared/ui/Input";

import { getAddCommentFormText } from "../../model/selectors/getAddCommentFormText/getAddCommentFormText";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";

import cls from "./AddCommentForm.module.scss";
import { HStack } from "@/shared/ui/Stack";

export interface AddCommentFormProps {
  className?: string;
  onSendCommentSendPress?: (value: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({
  onSendCommentSendPress,
  className,
}: AddCommentFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const onChangeInputText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSend = useCallback(() => {
    if (onSendCommentSendPress) {
      if (text) {
        onSendCommentSendPress(text);
        dispatch(addCommentFormActions.setText(""));
      }
    }
  }, [onSendCommentSendPress, text, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid="AddCommentForm"
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          onChange={onChangeInputText}
          value={text}
          className={cls.input}
          placeholder={t("Введите текст комментария")}
        />
        <CustomButton
          data-testid="AddCommentForm.Button"
          onClick={onSend}
          className={cls.sendBtn}
        >
          {t("Отправить")}
        </CustomButton>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
np;
