import { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomButton.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const CustomButton = (props: CustomButtonProps) => {
    const { className, square, theme, onClick, children, size = ButtonSize.M, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls.square]: !!square
    }

    return (
        <button
            className={classNames(cls.CustomButton, mods, [className as string, cls[theme as string], cls[size]])}
            onClick={onClick}
            {...otherProps}>
            {children}
        </button>
    )
}
