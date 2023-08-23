import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (

        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `Редактирование статьи с id ${id as string}` : 'Создание новой статьи'}
        </Page>

    )
}

export default ArticleEditPage
