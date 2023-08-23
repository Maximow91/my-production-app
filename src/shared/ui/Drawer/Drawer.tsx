import { Portal } from '@headlessui/react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { useCallback, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { useEffect } from 'react'

import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
    children: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const height = window.innerHeight - 100

const DrawerContent = (props: DrawerProps) => {
    const { children, className, isOpen, onClose } = props

    const { Spring, Gesture } = useAnimationLibs()

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const openDrawer = useCallback(() => {
        api.start({
            y: 0,
            immediate: false
        })
    }, [api])

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [api, isOpen, openDrawer])

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) cancel()

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    openDrawer()
                }
            } else {
                api.start({ y: my, immediate: true })
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
        }
    )

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    const { theme } = useTheme()

    if (!isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <Spring.a.div className={cls.sheet} {...bind} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
}

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs()
    if (!isLoaded) {
        return null
    }

    return <DrawerContent {...props} />
}

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>)
}
