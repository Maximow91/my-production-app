import { type AnyAction, type Reducer, type ReducersMapObject, type EnhancedStore, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type articleDetailsPageRecomendationsSchema, type ArticleDetailsCommentsSchema, type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type LoginSchema } from 'features/authByUserName'
import { type UISchema } from 'features/UI'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
