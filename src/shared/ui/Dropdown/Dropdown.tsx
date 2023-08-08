import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink'
import cls from './Dropdown.module.scss'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft
}

export function Dropdown (props: DropdownProps) {
    const { items, trigger, className, direction = 'bottom right' } = props

    const menuClasses = [mapDirectionClass[direction]]
    return (
        <Menu as='div' className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const { content: contentItem, disabled, onClick, href } = item

                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            disabled={disabled}
                            onClick={onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
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
