import { type ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    readonly?: boolean
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const mods = {}

    const optionList = useMemo(() => {
        return options?.map((opt) => {
            return (<option key={opt.value} className={cls.option} >{opt.content}</option>)
        })
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}:`}</span>}
            <select disabled={readonly} onChange={onChangeHandler} value={value} className={cls.select}>
                {optionList}
            </select>
        </div>
    )
})
