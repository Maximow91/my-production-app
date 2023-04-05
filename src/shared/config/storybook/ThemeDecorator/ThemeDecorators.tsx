import { type Decorator } from '@storybook/react'
import { type Theme } from '../../../../../src/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
    const decorator: Decorator = (Story) => (<div className={`app ${theme}`}><Story /></div>)
    return decorator
}
