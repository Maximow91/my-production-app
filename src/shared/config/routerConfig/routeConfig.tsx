import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARICLES = 'articles',
    ARICLE_DETAILS = 'article_details',
    //
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // id
    [AppRoutes.ARICLES]: '/articles',
    [AppRoutes.ARICLE_DETAILS]: '/articles/', // id
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: { path: RoutePaths.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePaths.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: `${RoutePaths.profile}:id`, element: <ProfilePage />, authOnly: true },
    [AppRoutes.ARICLES]: { path: RoutePaths.articles, element: <ArticlesPage />, authOnly: true },
    [AppRoutes.ARICLE_DETAILS]: { path: `${RoutePaths.article_details}:id`, element: <ArticleDetailsPage />, authOnly: true },
    [AppRoutes.NOT_FOUND]: { path: RoutePaths.not_found, element: <NotFoundPage /> }
}
