import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { articleDetailsReduser } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice'
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReduser
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => {
    const decorator: Decorator = (Story) => (
        <StoreProvider initialState={initialState} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    )
    return decorator
}
