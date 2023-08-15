import { Portal } from '@headlessui/react'
import { useTheme } from 'app/providers/ThemeProvider'
import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'

interface DrawerProps {
    children: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = (props: DrawerProps) => {
    const { children, className, isOpen, onClose } = props

    const mods = {
        [cls.opened]: isOpen
    }

    const { theme } = useTheme()
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
