import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routeConfig'
import { PageLoader } from 'wigets/PageLoader'

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
					    key={path}
                        path={path}
                        element={<div className='page'>{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
