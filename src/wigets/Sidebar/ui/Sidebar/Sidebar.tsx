import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { ButtonSize } from 'shared/ui/CustomButton/ui/CustomButton'
import { LangSwitcher } from 'wigets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'wigets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import { VStack } from 'shared/ui/Stack'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const SidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside
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
            <VStack role='navigation' gap='8' className={cls.items}>
                {SidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    )
})
