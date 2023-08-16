import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    className?: string
    inverted?: boolean
}

export const Icon = ({ Svg, className, inverted }: IconProps) => {
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    )
}
