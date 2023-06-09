import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/authByUserName'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const dispatch = useDispatch()

    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)

    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
        setIsAuthModal(false)
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className as string])}>
                <CustomButton onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={cls.appLinks}>
                    {t('Выйти')}
                </CustomButton>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className as string])}>
            <CustomButton onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.appLinks}>
                {t('Войти')}
            </CustomButton>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    )
})
