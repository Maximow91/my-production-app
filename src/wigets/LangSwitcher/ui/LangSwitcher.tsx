import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomButton, ButtonTheme } from 'shared/ui/CustomButton'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const changeLangHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <CustomButton
      className={classNames(cls.LangSwitcher, {}, [className as string])}
      theme={ButtonTheme.CLEAR}
      onClick={changeLangHandler}>
      {t('Язык')}
    </CustomButton>
  )
}
