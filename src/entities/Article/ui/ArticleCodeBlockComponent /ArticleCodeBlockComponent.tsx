import { type CodeArticleBlock } from '../../../Article/model/types/article'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
    block?: CodeArticleBlock
    className?: string
}

export const ArticleCodeBlockComponent = memo(({ block, className }: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            {block?.code && <Code text={block?.code} />}
        </div>
    )
})
