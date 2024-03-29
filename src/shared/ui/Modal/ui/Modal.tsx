import { type ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Overlay } from "../../Overlay/Overlay";
import { Portal } from "../../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  isOpen = false,
  onClose,
  lazy,
}: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({
    delay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [
          className as string,
          "app_modal",
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
