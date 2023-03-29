import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinksProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinksProps) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            className={classNames(cls.appLink, {}, [className as string, cls[theme]])}
            to={to}
            {...otherProps}>
            {children}
        </Link>
    )
}
