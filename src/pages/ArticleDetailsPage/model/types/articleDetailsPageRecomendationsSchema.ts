import { type EntityState } from "@reduxjs/toolkit";
import { type Article } from "@/entities/Article";

export interface articleDetailsPageRecomendationsSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
