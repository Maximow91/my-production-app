import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ArticleBlockType, type ArticleBlock } from '../../model/types/article'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReduser } from '../../model/slice/articleDetailsSlice'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent /ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'

import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'

import cls from './ArticleDetails.module.scss'

import { TextBlockComponent } from '../TextBlockComponent/TextBlockComponent'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { HStack, VStack } from 'shared/ui/Stack'

interface ArticleDetailsProps {
    id: string
    className?: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReduser
}

export const ArticleDetails = memo(({ id, className }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch()

    const { t } = useTranslation('article-page')
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    useInitialEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        if (__PROJECT__ !== 'storybook') { dispatch(fetchArticleById(id)) }
    })

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:

                return <ArticleCodeBlockComponent block={block} key={block.id} className={cls.block} />

            case ArticleBlockType.IMAGE:

                return <ArticleImageBlockComponent block={block} key={block.id} className={cls.block} />

            case ArticleBlockType.TEXT:

                return <TextBlockComponent key={block.id} className={cls.block} block={block} />

            default:
                return null
        }
    }, [])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={100} />
                <Skeleton className={cls.skeleton} width={'100%'} height={100} />
            </>
        )
    } else if (error) {
        content = (<Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />)
    } else {
        content = (
            <>
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} size={200} src={article?.img} />
                </HStack>
                <VStack gap='4' max>
                    <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle}/>
                    <HStack gap='8' className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={EyeIcon}/>
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap='8'>
                        <Icon className={cls.icon} Svg={CalendarIcon}/>
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap='16' max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
