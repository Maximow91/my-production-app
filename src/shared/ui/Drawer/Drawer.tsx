import { Portal } from '@headlessui/react'
import { useTheme } from 'app/providers/ThemeProvider'
import { type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'

interface DrawerProps {
    children: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Drawer = (props: DrawerProps) => {
    const { children, className, isOpen, onClose, lazy } = props

    const { close, isClosing, isMounted } = useModal({ delay: ANIMATION_DELAY, onClose, isOpen })

    const { theme } = useTheme()
    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
