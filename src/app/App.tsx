import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'wigets/Navbar'
import { Sidebar } from 'wigets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    console.log('sdsdsdsdsdsdsd', localStorage.getItem(USER_LOCALSTORAGE_KEY))

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
