import { useEffect, type MutableRefObject } from 'react'

export interface UseInfiniteScrollOptions {
    wrapperRef: MutableRefObject<HTMLElement>
    triggerRef: MutableRefObject<HTMLElement>
    callback?: () => void
}

export function useInfiniteScroll ({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null

        const wrapperElement = wrapperRef.current
        const triggerElement = triggerRef.current

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0
            }
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)
            if (triggerElement) {
                observer.observe(triggerElement)
            }
        }
        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement)
            }
        }
    }, [wrapperRef, callback, triggerRef])
}
