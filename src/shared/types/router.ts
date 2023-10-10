// eslint-disable-next-line prod-app-plugin/layer-imports
import { type UserRole } from "@/entities/User";
import { type RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
