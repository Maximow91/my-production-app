import { ArticleBlockType, ArticleView, type TextArticleBlock, type Article } from '../../model/types/article'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { TextBlockComponent } from '../TextBlockComponent/TextBlockComponent'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'

interface ArticleListItemProps {
    className?: string
    article: Article
    view?: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view = ArticleView.TILE } = props

    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePaths.article_details}${article.id}`)
    }, [navigate, article.id])

    const types = <Text className={cls.types} text={article.type.join(', ')} />

    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    )

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as TextArticleBlock
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text className={cls.username} text={article.user.username} />
                        <Text className={cls.date} text={article.createdAt}/>
                    </div>
                    <Text className={cls.title} text={article.title} />
                    {types}
                    <img className={cls.img} src={article.img} alt={article.title}/>
                    {textBlock && (
                        <TextBlockComponent className={cls.textBlock} block={textBlock} />
                    )}
                    <div className={cls.footer}>
                        <CustomButton onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </CustomButton>
                    </div>
                </Card>
            </div>
        )
    } else {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card onClick={onOpenArticle} >
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
            </div>
        )
    }
}
