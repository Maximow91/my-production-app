import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { comments, className, isLoading } = props

    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />)
                : <Text className={cls.notFoundText} text={t('Комментарии отсутствуют')} />
            }
        </div>
    )
})
