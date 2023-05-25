import { useState, useMemo, type ReactNode } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../lib/ThemeContext'

const DEFAULT_THEME =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
    initalTheme?: Theme
}

export const ThemeProvider = ({ children, initalTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initalTheme || DEFAULT_THEME)

    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
