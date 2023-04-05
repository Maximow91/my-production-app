import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomButton } from 'shared/ui/CustomButton'
import { LangSwitcher } from 'wigets/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'wigets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
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
                data-testid='toggle-sidebar'
                onClick={onToggle}
            >
                toggle
            </CustomButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
