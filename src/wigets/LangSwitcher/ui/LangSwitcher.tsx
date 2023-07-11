import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomButton, ButtonTheme } from 'shared/ui/CustomButton'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const changeLangHandler = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <CustomButton
            className={classNames('', {}, [className as string])}
            theme={ButtonTheme.CLEAR}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={changeLangHandler}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </CustomButton>
    )
})
