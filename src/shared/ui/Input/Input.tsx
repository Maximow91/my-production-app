import { memo, useState, type ChangeEvent, type InputHTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (v: string) => void
    label?: string
    vertical?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const { value, onChange, className, label, vertical, readonly, type = 'text', ...otherProps } = props

    const [focused, setFocused] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const focusHandler = () => {
        setFocused(true)
    }
    const blurHandler = () => {
        setFocused(false)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className as string])}>
            <div className={classNames(cls.item, { [cls.vertical]: !!vertical }, []) }>
                {label && <p className={cls.label} >{`${label}:`} </p> }
                <input
                    className={classNames(cls.input, { [cls.readonly]: !!readonly }, [])}
                    readOnly={readonly}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    {...otherProps}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
            </div>
        </div>
    )
})
