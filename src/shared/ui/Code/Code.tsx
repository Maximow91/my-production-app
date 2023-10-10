import { useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonTheme, CustomButton } from "../CustomButton";
import cls from "./Code.module.scss";
import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";

interface CodeProps {
  text: string;
  className?: string;
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <CustomButton
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
        className={cls.copyBtn}
      >
        <CopyIcon className={cls.copyImg} />
      </CustomButton>
      <code className={cls.code}>{text}</code>
    </pre>
  );
};
