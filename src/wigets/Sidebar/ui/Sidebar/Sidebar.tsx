import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { ButtonSize } from 'shared/ui/CustomButton/ui/CustomButton'
import { LangSwitcher } from 'wigets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'wigets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/list.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className as string
            ])}>
            <CustomButton
                className={cls.collapsedBtn}
                data-testid='toggle-sidebar'
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </CustomButton>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePaths.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePaths.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
}
