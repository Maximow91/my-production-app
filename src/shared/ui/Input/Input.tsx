import { type ChangeEvent, memo, type InputHTMLAttributes, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (v: string) => void
}

export const Input = (props: InputProps) => {
    const { value, onChange, className, type = 'text', ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className as string])}>
            <input
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                type={type}
                {...otherProps}
            />
        </div>
    )
}
