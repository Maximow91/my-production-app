import { type CombinedState, configureStore, getDefaultMiddleware, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { type NavigateOptions, type To } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { type StateSchema } from './StateSchema'

export const returnReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?: (to: To, options?: NavigateOptions) => void) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate
                    }
                }
            })
    })
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof returnReduxStore>['dispatch']
