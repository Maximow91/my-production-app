import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { UserRole } from '@/entities/User'
import { AppRoutes, getRouteAbout, getRouteAdmin, getRouteArticleCreate, getRouteArticleDetails, getRouteArticleEdit, getRouteArticles, getRouteForbidden, getRouteMain, getRouteNotFound, getRouteProfile } from '@/shared/const/router'
import { type AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: { path: getRouteMain(), element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: getRouteAbout(), element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: getRouteProfile(':id'), element: <ProfilePage />, authOnly: true },
    [AppRoutes.ARICLES]: { path: getRouteArticles(), element: <ArticlesPage />, authOnly: true },
    [AppRoutes.ARICLE_DETAILS]: { path: getRouteArticleDetails(':id'), element: <ArticleDetailsPage />, authOnly: true },
    [AppRoutes.ARICLE_CREATE]: { path: getRouteArticleCreate(), element: <ArticleEditPage />, authOnly: true },
    [AppRoutes.ARICLE_EDIT]: { path: getRouteArticleEdit(':id'), element: <ArticleEditPage />, authOnly: true },
    [AppRoutes.ADMIN_PANEL]: { path: getRouteAdmin(), element: <AdminPanelPage />, authOnly: true, roles: [UserRole.MANAGER, UserRole.ADMIN] },
    [AppRoutes.FORBIDDEN_PAFE]: { path: getRouteForbidden(), element: <ForbiddenPage/> },
    [AppRoutes.NOT_FOUND]: { path: getRouteNotFound(), element: <NotFoundPage /> }
}
