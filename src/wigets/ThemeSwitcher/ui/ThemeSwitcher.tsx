import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import {App} from 'app/App';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {ButtonTheme, CustomButton} from 'shared/ui/CustomButton';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <CustomButton
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </CustomButton>
  );
};
