
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getArticleDetailsData } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { getCanUserEditArticle } from '../../model/selectors/article'

import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article-details')

    const navigate = useNavigate()

    const canEdit = useSelector(getCanUserEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePaths.articles)
    }, [navigate])

    const onEditClick = useCallback(() => {
        if (article?.id) {
            navigate(`${RoutePaths.article_details}${article?.id}/edit`)
        }
    }, [article?.id, navigate])

    return (

        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            {canEdit && <CustomButton className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditClick}>{t('Редактировать')}</CustomButton>}
            <CustomButton className={cls.backBtn} theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</CustomButton>
        </div>

    )
}
