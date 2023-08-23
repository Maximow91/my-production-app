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
