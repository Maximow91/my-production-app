import { type TextArticleBlock } from 'entities/Article/model/types/article'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
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
