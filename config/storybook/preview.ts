import type { Preview } from '@storybook/react'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorators'

import 'loki/configure-react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenceDecorator/SuspenceDecorator'
import { Theme } from '@/shared/const/theme'

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false
        }
    }), withRouter, SuspenseDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#00aced' },
                { name: 'dark', class: Theme.DARK, color: '#3b5998' },
                { name: 'orange', class: Theme.ORANGE, color: '#3b5998' }

            ]
        }
    }
}

export default preview
