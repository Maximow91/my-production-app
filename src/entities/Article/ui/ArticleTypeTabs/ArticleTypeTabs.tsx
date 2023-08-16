import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/const/const'

interface ArticleTypeTabsProps {
    value: ArticleType
    onChangeType: (type: ArticleType) => void
    className?: string
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props

    const { t } = useTranslation()

    const typeTabs = useMemo<TabItem[]>(() => {
        return [
            {
                value: ArticleType.IT,
                content: t('Aйти')
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука')
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика')
            },
            {
                value: ArticleType.ALL,
                content: t('Все')
            }
        ]
    }, [t])

    const clickHandle = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs onTabClick={clickHandle} value ={value} tabs={typeTabs} className={classNames('', {}, [className])} />
    )
}
