import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/const/const'

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleView.TILE } = props

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border='50%' />
                        <Skeleton className={cls.username} height={16} width={150} />
                        <Skeleton className={cls.date} height={16} width={150} />
                    </div>
                    <Skeleton className={cls.title} height={24} width={250}/>
                    <Skeleton className={cls.img} height={200} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        )
    } else {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card >
                    <div className={cls.imageWrapper}>
                        <Skeleton width={200} height={200} className={cls.image} />

                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} />
                </Card>
            </div>
        )
    }
}
