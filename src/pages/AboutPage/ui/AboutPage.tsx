import { useTranslation } from 'react-i18next'
import { Page } from '@/wigets/Page'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return <Page>{t('Страница о сайте')}</Page>
}

export default AboutPage
