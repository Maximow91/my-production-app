import { type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text/Text'
import { ARTICLE_LIST_ITEM_INDEX } from '@/shared/const/sessionStorage'
import { Icon } from '@/shared/ui/Icon/Icon'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { ButtonTheme, CustomButton } from '@/shared/ui/CustomButton'
import { RoutePaths } from '@/shared/config/routerConfig/routeConfig'
import { AppLink } from '@/shared/ui/AppLink'
import { TextBlockComponent } from '../TextBlockComponent/TextBlockComponent'
import { type TextArticleBlock, type Article } from '../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../model/const/const'

import cls from './ArticleListItem.module.scss'
import { HStack } from '@/shared/ui/Stack'

interface ArticleListItemProps {
    article: Article
    target?: HTMLAttributeAnchorTarget
    className?: string
    view?: ArticleView
    index?: number
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { index, article, className, target, view = ArticleView.TILE } = props

    const { t } = useTranslation()

    const types = <Text className={cls.types} text={article.type.join(', ')} />

    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    )

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_INDEX, JSON.stringify(index))
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as TextArticleBlock
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <AppLink to={`${RoutePaths.profile}${article.user.id}`}>
                            <HStack>
                                <Avatar size={30} src={article.user.avatar} />
                                <Text className={cls.username} text={article.user.username} />
                            </HStack>
                        </AppLink>
                        <Text className={cls.date} text={article.createdAt}/>
                    </div>
                    <Text className={cls.title} text={article.title} />
                    {types}
                    <img className={cls.img} src={article.img} alt={article.title}/>
                    {textBlock && (
                        <TextBlockComponent className={cls.textBlock} block={textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={`${RoutePaths.article_details}${article.id}`}>
                            <CustomButton onClick={handleButtonClick} theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </CustomButton>
                        </AppLink>
                    </div>
                </Card>
            </div>
        )
    } else {
        return (

            <AppLink onClick={handleButtonClick} target={target} to={`${RoutePaths.article_details}${article.id}`} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card >
                    <div className={cls.imageWrapper}>
                        <img className={cls.image} alt={article.title} src={article.img} />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text className={cls.title} text={article.title} />
                </Card>
            </AppLink>
        )
    }
}
