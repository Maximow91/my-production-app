import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { ButtonSize } from 'shared/ui/CustomButton/ui/CustomButton'
import { LangSwitcher } from 'wigets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'wigets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarItemsList } from 'wigets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

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
                {SidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
})
