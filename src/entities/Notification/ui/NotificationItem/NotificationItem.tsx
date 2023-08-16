import { memo } from 'react'
import { type Notification } from '../../model/types/notification'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text/Text'

import cls from './NotificationItem.module.scss'
import { Card, CardTheme } from '@/shared/ui/Card/Card'

interface NotificationItemProps {
    item: Notification
    className?: string
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { item, className } = props

    const content = (<Card
        theme={CardTheme.OUTLINE}
        className={classNames(cls.NotificationList, {}, [className])}>
        <Text title={item.title} text={item.description} />
    </Card>)

    if (item.href) {
        return (
            <a
                className={cls.link}
                target='_blank'
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>)
    }

    return content
})
