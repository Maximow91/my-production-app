import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { RoutePaths } from '@/shared/config/routerConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

import cls from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const { className } = props

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const authData = useSelector(getUserAuthData)

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const isAdminPanelAvailable = isAdmin || isManager

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }
    return (
        <Dropdown
            direction='bottom left'
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        href: RoutePaths.admin_panel
                    }]
                    : []),
                {
                    content: t('Профиль'),
                    href: `${RoutePaths.profile}${authData?.id}`
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar size={30}
                src={authData?.avatar}/>}
        />
    )
}
