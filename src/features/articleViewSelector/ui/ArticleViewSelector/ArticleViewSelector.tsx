import { memo } from 'react'
import { Icon } from 'shared/ui/Icon/Icon'
import ListIcon from 'shared/assets/icons/bi_list.svg'
import TileIcon from 'shared/assets/icons/fe_tiled.svg'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article'

interface ArticleViewSelectorProps {
    currentView?: ArticleView
    onViewClick?: (view: ArticleView) => void
    className?: string
}

const viewTypes = [{
    view: ArticleView.TILE,
    icon: TileIcon
},
{
    view: ArticleView.LIST,
    icon: ListIcon
}]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { currentView, onViewClick, className } = props

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(({ view, icon }) => {
                return (
                    <CustomButton key={view} theme={ButtonTheme.CLEAR} onClick={onClick(view)} >
                        <Icon className={classNames('', { [cls.notSelected]: view !== currentView }, [])} Svg={icon} />
                    </CustomButton>
                )
            })}
        </div>
    )
})
