import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice'

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (initialState: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => {
    const decorator: Decorator = (Story) => (
        <StoreProvider initialState={initialState} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    )
    return decorator
}
