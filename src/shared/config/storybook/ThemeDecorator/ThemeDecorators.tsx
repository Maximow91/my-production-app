import { type Decorator } from '@storybook/react'
import { ThemeProvider, type Theme } from '../../../../../src/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
    const decorator: Decorator = (Story) => (
        <ThemeProvider initalTheme={theme}>
            <div className={`app ${theme}`}><Story /></div>
        </ThemeProvider>
    )
    return decorator
}
