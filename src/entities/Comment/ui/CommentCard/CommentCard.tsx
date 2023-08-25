import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Text } from '@/shared/ui/Text'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { AppLink } from '@/shared/ui/AppLink'
import { VStack } from '@/shared/ui/Stack'
import { getRouteProfile } from '@/shared/const/router'

interface CommentCardProps {
    comment?: Comment
    className?: string
    isLoading?: boolean
}

export const CommentCard = memo(({ comment, className, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <VStack gap='8' max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={40} height={40} border={'50%'} />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack gap='8' max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={40} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>

            <Text className={cls.text} text={comment.text} />
        </VStack>
    )
})
