import { LoginModal } from 'features/authByUserName'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className as string])}>
            <CustomButton onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.appLinks}>
                {t('Войти')}
            </CustomButton>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
