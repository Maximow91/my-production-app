import { Suspense, useState } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'wigets/Navbar'
import { Sidebar } from 'wigets/Sidebar'
import { Modal } from 'shared/ui/Modal'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme as string])}>
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
