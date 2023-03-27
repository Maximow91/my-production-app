import { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomButton.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const CustomButton = (props: CustomButtonProps) => {
  const { className, theme, onClick, children, ...otherProps } = props

  return (
    <button
      className={classNames(cls.CustomButton, {}, [className as string, cls[theme as string]])}
      onClick={onClick}
      {...otherProps}>
      {children}
    </button>
  )
}
