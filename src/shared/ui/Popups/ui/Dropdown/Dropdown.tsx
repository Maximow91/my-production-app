import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../../../AppLink'
import { mapDirectionClass } from '../../styles/const'

import cls from './Dropdown.module.scss'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    items: DropdownItem[]
    trigger: ReactNode
    className?: string
    direction?: DropdownDirection
}

export function Dropdown (props: DropdownProps) {
    const { items, trigger, className, direction = 'bottom right' } = props

    const menuClasses = [mapDirectionClass[direction]]
    return (
        <Menu
            as='div'
            className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const { content: contentItem, disabled, onClick, href } = item

                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            disabled={disabled}
                            onClick={onClick}
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                        >
                            {contentItem}
                        </button>
                    )

                    if (href) {
                        return (
                            <Menu.Item key={String(content)} as={AppLink} to={href} disabled={disabled} >
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item key={Math.random()} as={Fragment} disabled={disabled} >
                            {content}
                        </Menu.Item>
                    )
                })}

            </Menu.Items>
        </Menu>
    )
}
