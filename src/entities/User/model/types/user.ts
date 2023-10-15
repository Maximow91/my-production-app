import { type FeatureFlags } from "@/shared/types/featureFlags";
import { type UserRole } from "../const/const";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
