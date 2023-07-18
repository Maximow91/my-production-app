import { useTranslation } from 'react-i18next'

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article')

    return <div>{t('Страница детаей статьи')}</div>
}

export default ArticleDetailsPage
