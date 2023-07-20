import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
    comment: Comment
    className?: string
    isLoading?: boolean
}

export const CommentCard = memo(({ comment, className, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={40} height={40} border={'50%'} />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        )
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={40} />}
                <Text className={cls.username} title={comment.user.username} />
            </div>

            <Text className={cls.text} text={comment.text} />
        </div>
    )
})
