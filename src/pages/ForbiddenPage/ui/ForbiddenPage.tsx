import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
    className?: string
}

export const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <Page data-testid='ForbiddenPage' className={classNames('', {}, [className])}>
            {t('ForbiddenPage')}
        </Page>
    )
}
