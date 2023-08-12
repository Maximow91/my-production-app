import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'wigets/Page'
import cls from './AdminPanelPage.module.scss'

interface AdminPanelPageProps {
    className?: string
}

export const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('AdminPanel')}
        </Page>
    )
}