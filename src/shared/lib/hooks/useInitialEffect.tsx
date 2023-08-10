import { useEffect } from 'react'

export const useInitialEffect = (cb: () => any) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            cb()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
