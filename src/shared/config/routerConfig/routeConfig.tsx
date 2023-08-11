import { UserRole } from 'entities/User'
import { AboutPage } from 'pages/AboutPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ForbiddenPage } from 'pages/ForbiddenPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARICLES = 'articles',
    ARICLE_DETAILS = 'article_details',
    ARICLE_CREATE = 'article_create',
    ARICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN_PAFE = 'forbidden_page',
    //
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // id
    [AppRoutes.ARICLES]: '/articles',
    [AppRoutes.ARICLE_CREATE]: '/articles/new',
    [AppRoutes.ARICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARICLE_DETAILS]: '/articles/', // id
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN_PAFE]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: { path: RoutePaths.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: RoutePaths.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: `${RoutePaths.profile}:id`, element: <ProfilePage />, authOnly: true },
    [AppRoutes.ARICLES]: { path: RoutePaths.articles, element: <ArticlesPage />, authOnly: true },
    [AppRoutes.ARICLE_DETAILS]: { path: `${RoutePaths.article_details}:id`, element: <ArticleDetailsPage />, authOnly: true },
    [AppRoutes.ARICLE_CREATE]: { path: `${RoutePaths.article_create}`, element: <ArticleEditPage />, authOnly: true },
    [AppRoutes.ARICLE_EDIT]: { path: `${RoutePaths.article_edit}`, element: <ArticleEditPage />, authOnly: true },
    [AppRoutes.ADMIN_PANEL]: { path: RoutePaths.admin_panel, element: <AdminPanelPage />, authOnly: true, roles: [UserRole.MANAGER, UserRole.ADMIN] },
    [AppRoutes.FORBIDDEN_PAFE]: { path: RoutePaths.forbidden_page, element: <ForbiddenPage/> },
    [AppRoutes.NOT_FOUND]: { path: RoutePaths.not_found, element: <NotFoundPage /> }
}
