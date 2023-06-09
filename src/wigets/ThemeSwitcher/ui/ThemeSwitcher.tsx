import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import DarkIcon from 'shared/assets/icons/dark.svg'
import LightIcon from 'shared/assets/icons/light.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ButtonTheme, CustomButton } from 'shared/ui/CustomButton'
import { memo } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <CustomButton
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className as string])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </CustomButton>
    )
})
