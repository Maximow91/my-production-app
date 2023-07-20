import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorators'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecodator'
import 'loki/configure-react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false
        }
    }), withRouter],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
}

export default preview
