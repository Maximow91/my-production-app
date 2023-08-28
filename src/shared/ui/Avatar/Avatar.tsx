import { type CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import UserIcon from '../../assets/icons/user.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar = ({ className, src, size, alt, fallbackInverted }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])

    const errorFallback = <Icon inverted={fallbackInverted} height={size} width={size} Svg={UserIcon } />

    UserIcon

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} border={'50%'} />}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}

        />
    )
}
