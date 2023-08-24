import { useCallback, useState } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { Icon } from '@/shared/ui/Icon'

import NotificationIcon from '@/shared/assets/icons/bell.svg'
import { NotificationList } from '@/entities/Notification'
import { useDevice } from '@/shared/lib/hooks/useDevice'
import { Drawer } from '@/shared/ui/Drawer'

import cls from './NotificationButton.module.scss'
import { Popover } from '@/shared/ui/Popups'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props

    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const isMobile = useDevice()

    const onOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false)
    }, [])

    const trigger = (
        <CustomButton theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </CustomButton>
    )

    if (isMobile) {
        return (
            <div>
                {trigger}
                <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer} >
                    <NotificationList className={cls.notifications} />
                </Drawer>
            </div>
        )
    }

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction='bottom left'
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
}
