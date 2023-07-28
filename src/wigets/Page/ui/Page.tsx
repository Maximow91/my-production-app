import { type StateSchema } from 'app/providers/StoreProvider'
import { getUIScrollByPath } from 'features/UI'
import { UIActions } from 'features/UI/model/slice/UISlice'
import { type MutableRefObject, useRef, type ReactNode, type UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle'
import cls from './Page.module.scss'

interface PageProps {
    children: ReactNode
    className?: string
    onScrollEnd?: () => void
}

export const Page = ({ children, className, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname))

    const dispatch = useAppDispatch()

    useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log('scroll')
        dispatch(UIActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
    }, 500)

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
