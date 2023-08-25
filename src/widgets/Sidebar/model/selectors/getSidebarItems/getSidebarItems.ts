import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/list.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import { type SidebarItemType } from '../../types/sidebar'
import { getRouteArticles, getRouteProfile, getRouteAbout, getRouteMain } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] =
        [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: MainIcon
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: AboutIcon
            }
        ]

        if (userData) {
            sidebarItemsList.push({
                path: getRouteProfile(userData?.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true
            })
        }

        return sidebarItemsList
    }
)
