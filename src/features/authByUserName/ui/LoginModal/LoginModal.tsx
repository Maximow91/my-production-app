import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className as string])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
