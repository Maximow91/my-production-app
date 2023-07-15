import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'main',
        Icon: MainIcon
    },
    {
        path: RoutePaths.about,
        text: 'О сайте',
        Icon: AboutIcon
    },
    {
        path: RoutePaths.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true
    }
]
