import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/wigets/Page'
import cls from './ForbiddenPage.module.scss'
interface ForbiddenPageProps {
    className?: string
}

export const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('ForbiddenPage')}
        </Page>
    )
}
