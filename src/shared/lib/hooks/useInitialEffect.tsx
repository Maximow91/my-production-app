import { useEffect } from 'react'

export const useInitialEffect = (cb: () => any) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            cb()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
