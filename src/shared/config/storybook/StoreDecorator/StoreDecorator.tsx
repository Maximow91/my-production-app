import { type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => {
    const decorator: Decorator = (Story) => (
        <StoreProvider initialState={initialState}>
            <Story />
        </StoreProvider>
    )
    return decorator
}
