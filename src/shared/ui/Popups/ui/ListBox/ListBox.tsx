import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type DropdownDirection } from 'shared/types/ui'
import { CustomButton } from '../../../CustomButton'
import { HStack } from '../../../Stack'
import { mapDirectionClass } from '../../styles/const'

import cls from './ListBox.module.scss'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    onChange: (value: string) => void
    value?: string
    defaultValue?: string
    items?: ListBoxItem[]
    className?: string
    readonly?: boolean
    label?: string
    direction?: DropdownDirection
}

export function ListBox (props: ListBoxProps) {
    const { onChange, value, defaultValue, items, readonly, label, className, direction = 'bottom right' } = props

    const optionsClasses = [mapDirectionClass[direction]]

    return (
        <HStack>
            {label && <p className={cls.label} >{`${label}:`}</p>}
            <HListBox disabled={readonly} as={'div'} className={classNames(cls.ListBox, {}, [className, popupCls.popup])} value={value} onChange={onChange}>
                <HListBox.Button className={cls.trigger} >
                    <CustomButton disabled={readonly}>{value || defaultValue}</CustomButton>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled }, [])}>
                                    {selected && '!!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}
