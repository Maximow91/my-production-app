import { type ImageArticleBlock } from '../../../Article/model/types/article'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { Text, TextAlign } from '@/shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
    block?: ImageArticleBlock
    className?: string
}

export const ArticleImageBlockComponent = memo(({ block, className }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.image} src={block?.src} alt={block?.title}/>
            {block?.title && <Text className={cls.title} title={block.title} align={TextAlign.CENTER} />}
        </div>
    )
})
