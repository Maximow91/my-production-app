import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'wigets/Navbar'
import { Sidebar } from 'wigets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getInitedAuthData, userActions } from 'entities/User'

export const App = () => {
    const dispatch = useDispatch()
    const isInited = useSelector(getInitedAuthData)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
