import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/authByUserName'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)
    const [isAuthModal, setIsAuthModal] = useState(false)

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

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

    const isAdminPanelAvailable = isAdmin || isManager

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className as string])}>
                <Text size={TextSize.L} theme={TextTheme.INVERTED} className={cls.appTitle} title={'AppTitle'} />
                <AppLink className={cls.createLink} to={RoutePaths.article_create} theme={AppLinkTheme.SECONDARY} >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction='bottom left'
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [{
                                content: t('Админка'),
                                href: RoutePaths.admin_panel
                            }]
                            : []),
                        {
                            content: t('Профиль'),
                            href: `${RoutePaths.profile}${authData.id}`
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout
                        }
                    ]}
                    trigger={<Avatar size={30}
                        src={authData.avatar}/>}
                />
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
