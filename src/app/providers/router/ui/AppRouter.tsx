import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutesProps, routeConfig } from 'shared/config/routerConfig/routeConfig'
import { PageLoader } from 'wigets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <div className='page'>{route.element}</div>

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                { Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
})
