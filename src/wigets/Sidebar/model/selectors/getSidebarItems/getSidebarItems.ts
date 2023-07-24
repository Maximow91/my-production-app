import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { RoutePaths } from 'shared/config/routerConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'
import { type SidebarItemType } from '../../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] =
        [
            {
                path: RoutePaths.main,
                text: 'Главная',
                Icon: MainIcon
            },
            {
                path: RoutePaths.about,
                text: 'О сайте',
                Icon: AboutIcon
            }
        ]

        if (userData) {
            sidebarItemsList.push({
                path: `${RoutePaths.profile}${userData?.id}`,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                path: RoutePaths.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true
            })
        }

        return sidebarItemsList
    }
)
