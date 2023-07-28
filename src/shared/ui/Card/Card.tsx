import { type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
    theme?: CardTheme
}

export const Card = (props: CardProps) => {
    const { children, className, theme = CardTheme.OUTLINE, ...otherProps } = props
    return (
        <div {...otherProps} className={classNames(cls.Card, {}, [className, cls[theme]])}>
            {children}
        </div>
    )
}
