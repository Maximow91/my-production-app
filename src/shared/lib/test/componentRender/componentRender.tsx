import { type ReactNode } from 'react'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18nForTest from '@/shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const { route = '/', initialState } = options

    return render(
        <MemoryRouter initialEntries={[route]} >
            <StoreProvider asyncReducers={options.asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>

    )
}
