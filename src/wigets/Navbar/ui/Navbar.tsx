import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink';
import {ThemeSwitcher} from 'wigets/ThemeSwitcher';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.appLinks}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          About
        </AppLink>
      </div>
    </div>
  );
};
