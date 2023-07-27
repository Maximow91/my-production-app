import { type Reducer } from '@reduxjs/toolkit'
import { type StateSchemaKey, type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { useEffect, type ReactNode } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
    [name in StateSchemaKey ]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props

    const store = useStore() as ReduxStoreWithManager

    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers()

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    dispatch({ type: `@DESTROY ${name} reducer` })
                    store.reducerManager.remove(name as StateSchemaKey)
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {children}
        </>
    )
}
