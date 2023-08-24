import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface AdminPanelPageProps {
    className?: string
}

export const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <Page className={classNames('', {}, [className])}>
            {t('AdminPanel')}
        </Page>
    )
}
