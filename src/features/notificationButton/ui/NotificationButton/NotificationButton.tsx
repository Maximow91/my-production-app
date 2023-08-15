import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/bell.svg'
import { NotificationList } from 'entities/Notification'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction='bottom left'
            trigger={
                <CustomButton theme={ButtonTheme.CLEAR}
                >
                    <Icon Svg={NotificationIcon} inverted />
                </CustomButton>}
        >
            <NotificationList className={cls.notifications} />
        </Popover>

    )
}
