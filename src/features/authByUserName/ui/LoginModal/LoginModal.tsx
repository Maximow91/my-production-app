import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    className?: string
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className as string])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    )
}
