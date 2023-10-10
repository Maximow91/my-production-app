export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARICLES = "articles",
  ARICLE_DETAILS = "article_details",
  ARICLE_CREATE = "article_create",
  ARICLE_EDIT = "article_edit",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN_PAFE = "forbidden_page",
  //
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => "/articles";
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";
export const getRouteNotFound = () => "*";

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: getRouteMain(),
  [AppRoutes.ABOUT]: getRouteAbout(),
  [AppRoutes.PROFILE]: getRouteProfile(":id"), // id
  [AppRoutes.ARICLES]: getRouteArticles(),
  [AppRoutes.ARICLE_CREATE]: getRouteArticleCreate(),
  [AppRoutes.ARICLE_EDIT]: getRouteArticleEdit(":id"),
  [AppRoutes.ARICLE_DETAILS]: getRouteArticleDetails(":id"), // id
  [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
  [AppRoutes.FORBIDDEN_PAFE]: getRouteForbidden(),
  [AppRoutes.NOT_FOUND]: getRouteNotFound(),
};
