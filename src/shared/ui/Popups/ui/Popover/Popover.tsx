import { type ReactNode } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type DropdownDirection } from '../../../../types/ui'
import { mapDirectionClass } from '../../styles/const'

import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    trigger: ReactNode
    children: ReactNode
    className?: string
    direction?: DropdownDirection
}

export const Popover = (props: PopoverProps) => {
    const { trigger, children, className, direction = 'bottom right' } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (

        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button
                as='div'
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
