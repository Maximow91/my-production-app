import { useCallback, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    tabs: TabItem[]
    value: string
    onTabClick: (Tab: TabItem) => void
    className?: string
}

export const Tabs = (props: TabsProps) => {
    const { tabs, value, onTabClick, className } = props

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card onClick={clickHandle(tab)} theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE} className={cls.tab} key={tab.value}>
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
