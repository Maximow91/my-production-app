import React, { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Overlay } from '../../Overlay/Overlay'
import { Portal } from '../../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen = false, onClose, lazy }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout> >()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    useEffect(() => {
        setIsMounted(true)
    }, [
        isOpen
    ])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className as string, 'app_modal'])}>
                <Overlay onClick={onCloseHandler} />
                <div className={cls.content} >{children}</div>
            </div>
        </Portal>
    )
}
