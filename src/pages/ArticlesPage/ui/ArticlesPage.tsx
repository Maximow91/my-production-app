import { useTranslation } from 'react-i18next'

const ArticlesPage = () => {
    const { t } = useTranslation('article')

    return <div>{t('Страница статьи')}</div>
}

export default ArticlesPage
