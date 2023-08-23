import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { LoginModal } from '@/features/authByUserName'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { HStack } from '@/shared/ui/Stack'
import { RoutePaths } from '@/shared/const/router'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const onOpenPress = () => {
        setIsOpen(true)
    }

    const onClosePress = () => {
        setIsOpen(false)
    }

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className as string])}>
                <Text size={TextSize.L} theme={TextTheme.INVERTED} className={cls.appTitle} title={'AppTitle'} />
                <AppLink className={cls.createLink} to={RoutePaths.article_create} theme={AppLinkTheme.SECONDARY} >
                    {t('Создать статью')}
                </AppLink>
                <HStack
                    gap='16'
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(cls.navbar, {}, [className as string])}>
            <CustomButton onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.appLinks}>
                {t('Войти')}
            </CustomButton>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    )
})
