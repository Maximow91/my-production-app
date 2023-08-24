import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'

import { type TextArticleBlock } from '../../model/types/article'

import cls from './TextBlockComponent.module.scss'

interface TextBlockComponentProps {
    block: TextArticleBlock
    className?: string
}

export const TextBlockComponent = (props: TextBlockComponentProps) => {
    const { className, block } = props
    return (
        <div className={classNames(cls.TextBlockComponent, {}, [className])}>
            <Text className={cls.title} title={block.title}/>
            {block.paragraphs.map(item => <Text key={item} className={cls.content} text={item}/>)}

        </div>
    )
}
