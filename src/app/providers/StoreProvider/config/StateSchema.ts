import { type AnyAction, type Reducer, type ReducersMapObject, type EnhancedStore, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddCommentFormSchema } from 'features/addCommentForm'

import { type LoginSchema } from 'features/authByUserName'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type NavigateOptions, type To } from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
